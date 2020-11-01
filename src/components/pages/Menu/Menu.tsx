import React, { useState, useContext, useEffect }  from "react";
import firebase from "../../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../Firebase/AuthProvider";
import { PlusIcon } from "../../../assets/icons/Plus";
import { MenuFilter, MenuList, MenuNavigation, NewMenuItemForm } from "../../Menu";
import { menuRef } from "../../Firebase/firebase";

export const MenuPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewItem = () => {
    setShowForm(!showForm);
  }

  const handleClose = () => {
    setShowForm(false);
  }
  
  const [menu, setMenu]  = useState<any>([]);

  useEffect(() => {
    menuRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];

      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          type: items[item].type,
          ingredients: items[item].ingredients,
          description: items[item].description,
          price: items[item].price,
          label: items[item].label,
          preference: items[item].preference,
          calories: items[item].calories,
          fats: items[item].fats,
          carbs: items[item].carbs,
          protein: items[item].protein,
        });
      }
      setMenu(newState)
    });
  },[])

  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    setFilteredMenu(menu.filter((item:any) => item.type === 'soups'));
  },[menu]);

  const handleFilter = (e: any) => {
    e.persist();
    
    if (e.target.name === 'all') {
      setFilteredMenu(menu);
    } else {
      setFilteredMenu(menu.filter((item: any) => item.preference === e.target.name));
    }
  }

  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object);
  const currentUser = (authContext.user ? authContext.user.uid : "undefined");

  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);

  const AddNewItem = () => 
    <div className="menu__addnewitem-wrapper page-width">
      <button className={showForm ? "menu__addnewitem-btn button close" : "menu__addnewitem-btn button open"} onClick={handleAddNewItem}>
        <p className="menu__addnewitem-btn-text"><span className="menu__addnewitem-icon"><PlusIcon /></span>Add new item</p>
      </button>
    </div>
  ;

  return (
    <main className="menu">
      <nav className="menu__nav menu-nav">
        <MenuNavigation />
      </nav>
      <div className="menu__filter menu-filter">
        <MenuFilter handleFilter={handleFilter}/>
      </div>
      <div className="menu__wrapper page-width">
        {userDetails && userDetails.admin ?
          <div className="menu__add-new-item add-new-item">
            <AddNewItem />
            { showForm ?
              <div className="menu__addnewitem-overlay">
                <NewMenuItemForm showForm={showForm} handleClose={handleClose} />
              </div>
              : null }
          </div> 
          :
          null
        }
        <div className="menu__content menu-content">
          {filteredMenu && filteredMenu.length ? <MenuList menu={filteredMenu} /> : <p>Nothing found.</p>}
          {/* <MenuList menu={filteredMenu} /> */}
        </div>
      </div>
    </main>
)};

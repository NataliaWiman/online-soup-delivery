import React, { useState, useEffect }  from "react";
import "firebase/auth";
import "firebase/firestore";
import { MenuList, MenuNavigation } from "../../Menu";
import { menuRef } from "../../Firebase/firebase";

export const MenuDrinksPage = () => {  
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
    setFilteredMenu(menu.filter((item:any) => item.type === 'drinks'));
  },[menu]);

  return (
    <main className="menu">
      <nav className="menu__nav menu-nav">
        <MenuNavigation />
      </nav>
      
      <div className="menu__wrapper page-width">
        <div className="menu__content menu-content">
          {filteredMenu && filteredMenu.length ? <MenuList menu={filteredMenu} /> : <p>Nothing found.</p>}
        </div>
      </div>
    </main>
)};

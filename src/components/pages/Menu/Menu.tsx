import React, { useState }  from "react";
import { PlusIcon } from "../../../assets/icons/Plus";
import { MenuFilter, MenuList, MenuNavigation, NewMenuItemForm } from "../../Menu";

export const MenuPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewItem = () => {
    setShowForm(!showForm);
  }

  const handleClose = () => {
    setShowForm(false);
  }

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
        <MenuFilter />
      </div>
      <div className="menu__wrapper page-width">

        <div className="menu__add-new-item add-new-item">
          <AddNewItem />
          { showForm ? 
              <div className="menu__addnewitem-overlay">
                <NewMenuItemForm showForm={showForm} handleClose={handleClose} />
              </div>
            : null }
        </div>

        <div className="menu__content menu-content">
          <MenuList />
        </div>
      </div>
    </main>
)};

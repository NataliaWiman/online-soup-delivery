import React, { useState } from "react";

export const MenuFilter = ({handleFilter}: any) => {
  const preferences = ["all", "meat", "chicken", "fish", "vegan"];
  const [activePreference, setPreference] = useState<any>();

  return (
  <div className="menu-filter__wrapper page-width">
    <ul className="menu-filter__list">
      {preferences.map((preference, i) => {
        return (
        <li 
          key={i}
          className="menu-filter__item"
        >
          <button 
            name={preference} 
            onClick={(e) => {handleFilter(e); setPreference(preference)}}
            className={activePreference === preference ? "menu-filter__button menu-filter__button--active" : "menu-filter__button" }
          >
            {preference}
          </button>
        </li>
      )})}
    </ul>
  </div>
)};
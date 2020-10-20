import React from "react";

export const MenuFilter = () => 
  <div className="menu-filter__wrapper page-width">
    <ul className="menu-filter__list">
      <li className="menu-filter__item menu-filter__item--active">
        <p>All</p>
      </li>
      <li className="menu-filter__item">
        <p>Meat</p>
      </li>
      <li className="menu-filter__item">
        <p>Chicken</p>
      </li>
      <li className="menu-filter__item">
        <p>Fish</p>
      </li>
      <li className="menu-filter__item">
        <p>Vegetarian</p>
      </li>
    </ul>
  </div>
;
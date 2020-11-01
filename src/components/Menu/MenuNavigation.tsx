import React, { useState } from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";

export const MenuNavigation = () => {
  const types = ["soups", "drinks", "extra"];
  const [activeType, setType] = useState<any>();

  const renderLink = (link: any) => {
    switch(link) {
      case 'soups':
        return <Link onClick={() => {setType(link)}} to={ROUTES.MENU} area-label="Soups">Soups</Link>;
      case 'drinks':
        return <Link onClick={() => {setType(link)}} to={ROUTES.MENU_DRINKS} area-label="Drinks">Drinks</Link>;
      case 'extra':
        return <Link onClick={() => {setType(link)}} to={ROUTES.MENU_EXTRA} area-label="Extra">Extra</Link>;
  }};

  return (
  <div className="menu-nav__wrapper page-width">
    <ul className="menu-nav__list">
      {types.map((type, i) => {
        return (
          <li 
            key={type}
            className={activeType === type ? "menu-nav__item menu-nav__item--active" : "menu-nav__item" }>
            { renderLink(type) }
          </li>
        )}
      )}
    </ul>
  </div>
  )};

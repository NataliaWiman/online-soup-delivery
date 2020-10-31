import React, { useState } from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "../Logo";
import { Navigation } from '../Navigation';
import { AccountIcon } from "../../assets/icons/Account";
import { BasketIcon } from "../../assets/icons/Basket";

export const Header = () => {
const [isOpen, setIsOpen] = useState(false);
const [isNavOpen, setNavIsOpen] = useState(false);

const handleClose = (close: React.SetStateAction<boolean>) => {
  setNavIsOpen(close);
  if(!isOpen) {
  setIsOpen(close);
}
};

const handleToggle = () => {
  setIsOpen(!isOpen);
  setNavIsOpen(!isOpen);
}

  return (
    <header className="header">
      <div className="header__wrapper page-width">
        <div className="header__burger-btn">
          <BurgerMenu 
            isOpen={isOpen}
            isNavOpen={isNavOpen}
            handleToggle={handleToggle}
            />
            <Navigation 
            isOpen={isNavOpen}
            handleClose={handleClose}
          />
          
      </div>
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__user-group">
        <Link to={ROUTES.ACCOUNT} area-label="Account"><AccountIcon /></Link>
        <Link to={ROUTES.BASKET} area-label="Shopping Cart"><BasketIcon /></Link>
      </div>
      </div>
      
    </header>
)};

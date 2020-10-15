import React, { useState, useRef, useCallback } from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "../Logo";
import { Navigation } from '../Navigation';

export const Header = () => {
const [isOpen, setIsOpen] = useState(false);

const handleClose = (close: React.SetStateAction<boolean>) => {
  setIsOpen(close);
};

const handleToggle = () => {
  setIsOpen(!isOpen);
}

  return (
    <header className="header">
      <div className="header__burger-btn">
        <BurgerMenu 
          isOpen={isOpen}
          handleToggle={handleToggle}
        />
        <Navigation 
          isOpen={isOpen}
          handleClose={handleClose}
        />
      </div>
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__user-group">
        <Link to={ROUTES.HOME} area-label="Account">ACC</Link>
        <Link to={ROUTES.HOME} area-label="Shopping Cart">SC</Link>
      </div>
    </header>
)};

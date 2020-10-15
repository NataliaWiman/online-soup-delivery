import React from "react";
import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "../Logo";

export const Header = () => 
  <header className="header">
    <BurgerMenu />
    <div className="header__logo">
      <Logo />
    </div>
  </header>
;

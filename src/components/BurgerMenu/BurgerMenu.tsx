import React from "react";
import { BurgerMenuProps } from "./types";

export const BurgerMenu = ({ isOpen, isNavOpen, handleToggle }: BurgerMenuProps) => {

   const handleClick = () => {
    handleToggle();
  };
 
  return (
  <button onClick={handleClick} className={isOpen && isNavOpen ? 'burger-menu active' : 'burger-menu'}>
    <span></span>
  </button>
)};
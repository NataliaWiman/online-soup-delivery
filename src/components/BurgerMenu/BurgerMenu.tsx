import React from "react";
import { BurgerMenuProps } from "./types";

export const BurgerMenu = ({ isOpen, handleToggle }: BurgerMenuProps) => {

  const handleClick = () => {
    handleToggle();
  };

  return (
  <button onClick={handleClick} className={isOpen ? 'burger-menu active' : 'burger-menu'}>
    <span></span>
  </button>
)};
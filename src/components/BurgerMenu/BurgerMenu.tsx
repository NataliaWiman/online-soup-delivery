import React, { useState } from "react";

export const BurgerMenu = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
  <button onClick={handleClick} className={openNav ? 'burger-menu active' : 'burger-menu'}>
    <span></span>
  </button>
)};
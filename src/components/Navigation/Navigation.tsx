import React, { useRef, useCallback, useEffect } from "react";
import { NavigationProps } from "./types";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export const Navigation = ({ isOpen, handleClose }: NavigationProps) => {
  const node: any = useRef<HTMLElement>(null);

  const handleClick = () => {
    handleClose();
  };

  const handleClickOutside = useCallback(
    (event: any) => {
      if (node && node.current && node.current.contains(event.target)) {
        return; // inside click
      }
      handleClose(false); // outside click
    }, [handleClose],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={isOpen? "navigation__overlay" : ""}>
      <div ref={node} className={isOpen ? "navigation open" : "navigation"}>
        <ul className="navigation__list">
        <li className="navigation__item">
            <Link onClick={handleClick} to={ROUTES.HOME} className="navigation__link">Home</Link>
          </li>
          <li className="navigation__item">
            <Link onClick={handleClick} to={ROUTES.MENU} className="navigation__link">Our menu</Link>
          </li>
          <li className="navigation__item">
            <Link onClick={handleClick} to={ROUTES.ACCOUNT} className="navigation__link">Account</Link>
          </li>
          <li className="navigation__item">
            <Link onClick={handleClick} to={ROUTES.ADMIN} className="navigation__link">Admin</Link>
          </li>
        </ul>
        <ul>
          <li>About us</li>
        </ul>
      </div>
    </div>
  )
};

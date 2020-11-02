import React, { useState, useContext, useEffect } from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "../Logo";
import { Navigation } from '../Navigation';
import { AccountIcon } from "../../assets/icons/Account";
import { BasketIcon } from "../../assets/icons/Basket";
import firebase from "../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../Firebase/AuthProvider";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setNavIsOpen] = useState(false);

  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object);
  
  const currentUser = (authContext && authContext.user && authContext.user.uid ? authContext.user.uid : "undefined");
  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);

  useEffect(() => {
    userRef.onSnapshot(snapshot => setUserDetails(snapshot.data()))
  }, [currentUser]);

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
        <Link to={ROUTES.BASKET} area-label="Shopping Cart">
          {userDetails && userDetails.basket ? <span>{userDetails.basket.length}</span> : null}
          <BasketIcon />
        </Link>
      </div>
      </div>
      
    </header>
)};

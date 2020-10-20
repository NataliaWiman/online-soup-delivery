import React from "react";
import * as ROUTES from '../../../constants/routes';
import { Link } from "react-router-dom";

export const HomePage = () => 
  <div className="home-page">
    <div className="home-page__container">
      <h2 className="home-page__heading">Welcome!</h2>
      <p className="home-page__text">Type in your address to see if we deliver to your address.</p>
      <input type="text" placeholder="Type in your adress" />
      <p className="home-page__text">Or login to your account to choose a saved adsress.</p>
      <Link to={ROUTES.SIGN_IN} area-label="Sign In" className="home-page__login">Sign in to your account</Link>
    </div>
  </div>
;

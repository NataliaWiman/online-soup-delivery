import React from "react";
import * as ROUTES from '../../../constants/routes';
import { Link } from "react-router-dom";
import { ShareIcon } from "../../../assets/icons/Share";
import { Logo } from "../../Logo";

export const HomePage = () => 
  <div className="home-page">
    <div className="home-page__container page-width">

     <p className="home-page__text">Please, create an account to be able to use our service</p> 
      <Link to={ROUTES.SIGN_UP} className="button">Create an account</Link>

      <div className="home-page__signin">
        <p>
          <span>Already have an account?</span>
        </p>
        <Link to={ROUTES.SIGN_IN} className="button ghost-button">Login</Link>
      </div>      

      <h2 className="home-page__slogan">Shared happiness is double happiness</h2>

      <span className="home-page__share-icon">
        <ShareIcon />
      </span>

      <p className="home-page__description">
        <span>Whether you are sharing our delicious soups with a loved one or enjoying it by yourself, it will surely boost body, soul and the immune system from the first spoon.</span> 
      </p>

      <div>
        <Link to={ROUTES.MENU} className="button home-page__browsing">I'm just browsing</Link>
      </div>

    </div>
  </div>
;

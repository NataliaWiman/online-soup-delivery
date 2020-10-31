import React from "react";
import * as ROUTES from '../../../constants/routes';
import { Link } from "react-router-dom";
import { MarkerIcon } from "../../../assets/icons/Marker";
import { ShareIcon } from "../../../assets/icons/Share";

export const HomePage = () => 
  <div className="home-page">
    <div className="home-page__container page-width">
      <div className="home-page__input-wrapper">
        <input className="home-page__input input" type="text" placeholder="Type in your delivery adress" />
        <span>
          <MarkerIcon />
        </span>
      </div>
      
      <Link to={ROUTES.MENU} className="button">Continue</Link>

      <h2 className="home-page__slogan">Shared happiness is double happiness</h2>

      <span className="home-page__share-icon">
        <ShareIcon />
      </span>

      <p className="home-page__description">
        <span>Warm someone's soul with a delicious soup that boosts the body and the immune system!</span> 
        <span>We have soups that are filled with goodies for you or maybe a friend?</span>
      </p>

    </div>
  </div>
;

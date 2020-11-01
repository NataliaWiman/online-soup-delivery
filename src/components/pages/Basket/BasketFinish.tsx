import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import cooking from '../../../assets/img/cooking.gif';

export const BasketFinishPage = () => {
  
  return (
    <main className="basket">
      <div className="basket__wrapper page-width modal__wrapper basket__finish">
        <div className="basket__container">
          <div className="basket__estimated">
            <h2 className="basket__title modal__title">
              Your order is on its way!
            </h2>
            <p className="basket__estimated-text">Estimated time of delivery is</p>
            <p className="basket__estimated-time">
              <span>1</span><span>7</span>:<span>1</span><span>5</span>
            </p>
            <div className="basket__estimated-img">
              <img src={cooking} alt="cooking"/>
            </div>
          </div>
          <div className="basket__button-wrapper page-width">
            <Link to={ROUTES.HOME} className="basket__back-to-home button">
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
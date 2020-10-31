import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import { ArrowIcon } from "../../../assets/icons/Arrow";

export const BasketAddressPage = () => {
  
  return (
    <main className="basket">
      <div className="basket__wrapper page-width modal__wrapper">
        <div className="basket__order">
          <h2 className="basket__title modal__title">
            <Link to={ROUTES.BASKET} className="basket__go-back">
              <ArrowIcon />
            </Link>
            Address
          </h2>
        </div>
      </div>
    </main>
  )
}
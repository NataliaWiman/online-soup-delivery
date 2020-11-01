import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import { ArrowIcon } from "../../../assets/icons/Arrow";
import firebase from "../../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../Firebase/AuthProvider";
import klarna from '../../../assets/img/klarna.png';
import swish from '../../../assets/img/swish.png';
import card from '../../../assets/img/card.png';

export const BasketAddressPage = () => {
  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object)
  const currentUser = (authContext.user ? authContext.user.uid : "undefined");

  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);
  
  return (
    <main className="basket">
      <div className="basket__wrapper page-width modal__wrapper basket__address">
        <div>
          <h2 className="basket__title modal__title">
            <Link to={ROUTES.BASKET} className="basket__go-back">
              <ArrowIcon />
            </Link>
            Delivery Information
          </h2>
        </div>

        <div className="basket__address-input">
          <label htmlFor="name">
            <span>Name</span>
            <input className="input" id="name" type="text" placeholder="Name" value={userDetails ? userDetails.username : null} />
          </label>
          <label htmlFor="address">
            <span>Address</span>
            <input className="input" id="address" type="text" placeholder="Delivery address" value={userDetails ? userDetails.address : null}/>
          </label>
          <label htmlFor="phone">
            <span>Phone number</span>
            <input className="input" id="phone" type="text" placeholder="Resipient's phone number" value={userDetails ? userDetails.phone : null}/>
          </label>
        </div>

        <div className="basket__address-payment">
          <h2>Choose payment method</h2>
          
          <div>
            <button className="button">
              <img src={klarna} alt="Klarna" />
              <span>Klarna</span>
            </button>
            <button className="button">
              <img src={swish} alt="Swish" />
              <span>Swish</span>
            </button>
            <button className="button">
              <img src={card} alt="Bank card" />
              <span>Bank card</span>
            </button>
          </div>
        </div>
      </div>

      <div className="basket__bottom page-width modal__wrapper">
        <Link to={ROUTES.BASKET_FINISH} className="button">Continue</Link>        
      </div>
    </main>
  )
}
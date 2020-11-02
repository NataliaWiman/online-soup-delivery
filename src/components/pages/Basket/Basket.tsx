import React, { useState, useContext, useEffect } from "react";
import { Success } from "../../Success";
import klarna from '../../../assets/img/klarna.png';
import swish from '../../../assets/img/swish.png';
import card from '../../../assets/img/card.png';
import * as ROUTES from '../../../constants/routes';
import { Link } from "react-router-dom";
import firebase from "../../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../Firebase/AuthProvider";
import creamypumpkinsoup from '../../../assets/img/creamypumpkinsoup.jpeg';
import spicytomatosoup from '../../../assets/img/spicytomatosoup.jpeg';
import greencurrysoup from '../../../assets/img/greencurrysoup.jpeg';
import chickennoodlesoup from '../../../assets/img/chickennoodlesoup.jpeg';
import creamysalmonsoup from '../../../assets/img/creamysalmonsoup.jpeg';
import coffee from '../../../assets/img/coffee.jpeg';
import soda from '../../../assets/img/soda.jpeg';
import garlicbread from '../../../assets/img/garlicbread.jpeg';
import { PlusIcon } from "../../../assets/icons/Plus";
import { MinusIcon } from "../../../assets/icons/Minus";
import { ArrowIcon } from "../../../assets/icons/Arrow";

export const BasketPage = () => {
  const [addNote, setAddNote] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [stepperValue, setStepperValue] = useState<number>(1);

  const [isRemoved, setRemoved] = useState(false);

  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object)
  const currentUser = (authContext.user ? authContext.user.uid : "undefined");

  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);

  useEffect(() => {
    userRef.onSnapshot(snapshot => setUserDetails(snapshot.data()))
  }, [currentUser]);

  const handleAddNote = () => {
    setAddNote(!addNote)
  }

  const handleSuccess = () => {
    setSuccess(!isSuccess);
  }

  const renderImage = (imageName: any) => {
    let imageCode;

    switch(imageName) {
      case 'creamypumpkinsoup':
        imageCode = creamypumpkinsoup; break;
      case 'spicytomatosoup':
        imageCode = spicytomatosoup; break;
      case 'greencurrysoup':
        imageCode = greencurrysoup; break;
      case 'chickennoodlesoup':
        imageCode = chickennoodlesoup; break;
      case 'creamysalmonsoup':
        imageCode = creamysalmonsoup; break;
      case 'coffee':
        imageCode = coffee; break;
      case 'soda':
        imageCode = soda; break;
      case 'garlicbread':
        imageCode = garlicbread; break;
    }

    return (
      <img src={imageCode} alt={imageName} className="product-list__image"/>
    );
  }

  const updateBasket = (basketItem: any) => {
    userRef.update({
      basket: firebase.firestore.FieldValue.arrayRemove(basketItem)
    })}

  const handleRemoveItem = () => {
    setRemoved(!isRemoved);
  }

  const totalPrice = () => {
    const numbers:any = [];
    let reduced;
    
    if (userDetails && userDetails.basket) {
      userDetails.basket.map((basketItem:any) => 
      numbers.push(Number(basketItem.price * basketItem.quantity)))
    }
    if (numbers.length) {
      reduced = numbers.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    }

    return reduced + 30;
  }

  const handleDecrement = () => {
    setStepperValue((prevCount: number) => prevCount >= 1 ? prevCount - 1 : 0);
  }

  const handleIncrement = () => {
    setStepperValue((prevCount: number) => prevCount + 1);
  }
  
  return (
    <main className="basket">
      <div className={userDetails && userDetails.basket && userDetails.basket.length ? "basket__wrapper page-width modal__wrapper" : "basket__wrapper basket__wrapper--long page-width modal__wrapper"}>
      <div>
          <h2 className="basket__title modal__title">
            <Link to={ROUTES.MENU} className="basket__go-back">
              <ArrowIcon />
            </Link>
            Basket
          </h2>
        </div>

          {
            userDetails && userDetails.basket && userDetails.basket.length ?
            <>
              <div className="basket__order">
                <ul className="basket__product-list product-list">
                {userDetails.basket.map((basketItem:any) => 
                    <li className="product-list__item" key={basketItem.id}>
                      {renderImage(basketItem.label)}
                      <div className="product-list__info">
                        <p>
                          <span className="product-list__title">{basketItem.title}</span>
                          <span className="product-list__description">{basketItem.description}</span>
                        </p>
                        <div className="product-list__info-bottom">
                          <div className="stepper">
                            <button onClick={handleDecrement} className="stepper--decrease"><span><MinusIcon /></span></button>
                            <input type="text" placeholder="0" value={basketItem.quantity} readOnly />
                            <button onClick={handleIncrement} className="stepper--increase"><span><PlusIcon /></span></button>
                          </div>
                          <span className="product-list__price">{basketItem.price * basketItem.quantity} kr</span>
                        </div>
                      </div>
                      <span onClick={() => {updateBasket(basketItem); handleRemoveItem()}} className="product-list__remove">
                        <PlusIcon />
                      </span>
                    </li>
                  )
                }
                </ul>

                <div className="basket__add-note add-note">
                  <h4 className="add-note__title">
                    Is this order a gift?*<br></br>
                    <span>*A small printed note will be delivered with your order.</span>
                  </h4>
                  <button onClick={handleAddNote} className={addNote ? "add-note__button--hide button ghost-button" : "add-note__button--show button ghost-button"}>Add a note</button>
                  <div className="add-note__block">
                    <textarea className={addNote ? "add-note__textarea add-note__textarea--show button ghost-button" : "add-note__textarea add-note__textarea--hide button ghost-button"}></textarea>
                    <div className="add-note__buttons">
                      <button onClick={handleAddNote} className={addNote ? "add-note__button--show button ghost-button" : "add-note__button--hide"}>Cancel</button>
                      <button onClick={handleSuccess} className={addNote ? "add-note__button--show button" : "add-note__button--hide"}>Add note</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basket__bottom page-width modal__wrapper">
                <p className="basket__bottom--payment-methods">
                  <span>Payment methods</span>
                  <span>
                    <img src={klarna} alt="Klarna" />
                    <img src={swish} alt="Swish" />
                    <img src={card} alt="Bank card" />
                  </span>
                </p>
                <p className="basket__bottom--delivery-price">
                  <span>Delivery price</span>
                  <span className="dotted"></span>
                  <span>30kr</span>
                </p>
                <p className="basket__bottom--total-price">
                <span>Total</span>
                  <span className="dotted"></span>
                  <span>
                    {totalPrice()} kr
                  </span>
                </p>
                {/* Handle SAVE */}
                <Link to={ROUTES.BASKET_ADDRESS} className="button">Continue</Link>
              </div>
            </>
            :
            <div className="basket__empty">
              <p className="basket__empty-text">Your shopping bag is empty</p>
              
              <Link to={ROUTES.MENU} className="button">Continue shopping</Link>
            </div>
          }

        <Success text="Note was added to the order" isSuccess={isSuccess} />
        
      </div>
    </main>
)};
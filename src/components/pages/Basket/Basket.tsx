import React, { useState } from "react";
import { Success } from "../../Success";
import klarna from '../../../assets/img/klarna.png';
import swish from '../../../assets/img/swish.png';
import card from '../../../assets/img/card.png';
import * as ROUTES from '../../../constants/routes';
import { Link } from "react-router-dom";
import { Stepper } from "../../Stepper";

export const BasketPage = () => {
  const [addNote, setAddNote] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [stepperValue, setStepperValue] = useState<number>(1);

  const handleAddNote = () => {
    setAddNote(!addNote)
  }

  const handleSuccess = () => {
    setSuccess(!isSuccess);
  }
  
  return (
    <main className="basket">
      <div className="basket__wrapper page-width modal__wrapper">
        <div className="basket__order">
          <h2 className="basket__title modal__title">Basket</h2>
          {/* <div className="basket__empty">
            <p className="basket__empty-text">Your shopping bag is empty</p>
          </div> */}

          <ul className="basket__product-list product-list">
            <li className="product-list__item">
              <img className="product-list__image" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt=""/>
              <div className="product-list__info">
                <p>
                  <span className="product-list__title">Pumpkin soup</span>
                  <span className="product-list__description">Pumpkin soup</span>
                </p>
                <div className="product-list__info-bottom">
                  <Stepper stepperValue={stepperValue} setStepperValue={setStepperValue}/>
                  <span className="product-list__price">{149 * stepperValue} kr </span>
                </div>
              </div>
            </li>
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
            <span>179kr</span>
          </p>
          {/* Handle SAVE */}
          <Link to={ROUTES.BASKET_ADDRESS} className="button">Continue</Link>
        </div>
        
        <Success text="Note was added to the order" isSuccess={isSuccess} />
        
      </div>
    </main>
)};
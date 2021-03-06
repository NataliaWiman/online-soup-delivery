import React, { useState, useContext, useEffect } from "react";
import firebase from "../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { ExpandIcon } from "../../assets/icons/Expand";
import { TrashIcon } from "../../assets/icons/Trash";
import { menuRef } from "../Firebase/firebase";
import { Success } from "../Success";
import { AuthContext } from "../Firebase/AuthProvider";
import creamypumpkinsoup from '../../assets/img/creamypumpkinsoup.jpeg';
import spicytomatosoup from '../../assets/img/spicytomatosoup.jpeg';
import greencurrysoup from '../../assets/img/greencurrysoup.jpeg';
import chickennoodlesoup from '../../assets/img/chickennoodlesoup.jpeg';
import creamysalmonsoup from '../../assets/img/creamysalmonsoup.jpeg';
import coffee from '../../assets/img/coffee.jpeg';
import soda from '../../assets/img/soda.jpeg';
import garlicbread from '../../assets/img/garlicbread.jpeg';
import { MinusIcon } from "../../assets/icons/Minus";
import { PlusIcon } from "../../assets/icons/Plus";

export const MenuItem = (props: any) => {
  const { menuItem } = props;

  const [isOverflowOpen, setOverflowOpen] = useState(false);
  const [isShowInfo, setShowInfo] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [stepperValue, setStepperValue] = useState<number>(1);

  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object);
  
  const currentUser = (authContext.user ? authContext.user.uid : "undefined");
  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);

  const handleClick = () => {
    setOverflowOpen(!isOverflowOpen);
  };

  const handleShowInfo = () => {
    setShowInfo(!isShowInfo);
  }

  const handleSuccess = () => {
    setSuccess(!isSuccess);
  }

  const OverflowMenu = () => {
    if (isOverflowOpen) {
      return (
        <div className="menu-card__overflow-menu overflow-menu">
        <button aria-label="delete" onClick={e => menuRef.child(menuItem.id).remove()}>
          <span className="close">
            <TrashIcon />
          </span>
          Delete item
        </button>
      </div>
    )}
    return null;
  };

  const MoreInformation = () => 
    <div className="menu-card__showinfo showinfo">
      <button onClick={ handleShowInfo } className={isShowInfo ? "showinfo__btn showinfo__btn--open button" : "showinfo__btn button"}>
        {isShowInfo ? "Hide information" : "Show more information"}
        {isShowInfo ? 
          <span className="showinfo__icon showinfo__icon--up"><ExpandIcon /></span> :
          <span className="showinfo__icon showinfo__icon--down"><ExpandIcon /></span>
        }
      </button>
    </div>
  ;

  const AddToCart = () => {
    const updateBasket = (newItem: any) => {
      const quantity = stepperValue;
      newItem.quantity = quantity;

      userDetails.basket.length ? userDetails.basket.map((oldItem: any) => {
        if (oldItem.id !== newItem.id) {
          userRef.update({
            basket: firebase.firestore.FieldValue.arrayUnion(newItem)
          })
        } else {
          userRef.update({
            basket: firebase.firestore.FieldValue.arrayUnion(newItem)
          })
          console.log('Item already added to cart with quantity of ' + oldItem.quantity);
        }
      }) :
      userRef.update({
        basket: firebase.firestore.FieldValue.arrayUnion(newItem)
      })
    };

    return (
      <button onClick={() => {updateBasket(menuItem); handleSuccess()}} className="button">Add to cart</button>
    )
  };

  /* <button onClick={handleSuccess} className="button">Add to cart</button> */

  const Ingredients = () => 
    <div className={!isShowInfo ? "menu-card__ingredients ingredients" : "menu-card__ingredients ingredients--show"}>
      <h4 className="ingredients__title">Ingredients:</h4>
      <p className="ingredients__list">{menuItem.ingredients}</p>
    </div>
  ;

  const Nutrition = () => 
    <div className={!isShowInfo ? "menu-card__nutrition nutrition" : "menu-card__nutrition nutrition--show"}>
      <h4 className="nutrition__title">Nutrition per portion:</h4>
      <ul className="nutrition__list">
        <li className="nutrition__item">
          <h6 className="nutrition__name">Calories</h6>
          <p className="nutrition__amount">{menuItem.calories}</p>
        </li>
        <li className="nutrition__item">
          <h6 className="nutrition__name">Fats</h6>
          <p className="nutrition__amount">{menuItem.fats} g</p>
        </li>
        <li className="nutrition__item">
          <h6 className="nutrition__name">Carbs</h6>
          <p className="nutrition__amount">{menuItem.carbs} g</p>
        </li>
        <li className="nutrition__item">
          <h6 className="nutrition__name">Protein</h6>
          <p className="nutrition__amount">{menuItem.protein} g</p>
        </li>
      </ul>
    </div>
  ;

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
      <img src={imageCode} alt={imageName} onClick={ handleShowInfo } className={isShowInfo ? "menu-card__image menu-card__image--large" : "menu-card__image"}/>
    );
  }

  const handleDecrement = () => {
    setStepperValue((prevCount: number) => prevCount >= 1 ? prevCount - 1 : 0);
  }

  const handleIncrement = () => {
    setStepperValue((prevCount: number) => prevCount + 1);
  }

  return (
    <li className="menu__card menu-card">
      {userDetails && userDetails.admin ?
        <div className="menu-card__admin-view">
          <button onClick={handleClick} className="menu-card__overflow-menu-btn"></button>
          <OverflowMenu />
        </div>
        :
        null
      }
      
      {renderImage(menuItem.label)}

      <div className={!isShowInfo ? "menu-card__content" : "menu-card__content menu-card__content--info"}>
        <p className="menu-card__item-type">{menuItem.preference}</p>
        <div className="menu-card__title-wrapper">
          <h4 className="menu-card__title">{menuItem.title}</h4>
          <h4 className="menu-card__price">{menuItem.price}.00 kr</h4>
        </div>
        <p className="menu-card__description">{menuItem.description}</p>
        <div className="menu-card__addtocart">

        <div className="stepper">
          <button onClick={handleDecrement} className="stepper--decrease"><span><MinusIcon /></span></button>
          <input type="text" placeholder="0" value={stepperValue} readOnly />
          <button onClick={handleIncrement} className="stepper--increase"><span><PlusIcon /></span></button>
        </div>

          <AddToCart />
        </div>
        <Ingredients />
        <Nutrition />
      </div>
      <MoreInformation />
      <Success text={menuItem.title + " was added to cart"} isSuccess={isSuccess} />
    </li>
  );
}
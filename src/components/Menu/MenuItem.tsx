import React, { useState } from "react";
import { EditIcon } from "../../assets/icons/Edit";
import { ExpandIcon } from "../../assets/icons/Expand";
import { MinusIcon } from "../../assets/icons/Minus";
import { PlusIcon } from "../../assets/icons/Plus";
import { TrashIcon } from "../../assets/icons/Trash";
import { menuRef } from "../Firebase/firebase";

export const MenuItem = (props: any) => {
  const { menuItem } = props;
  const [isOverflowOpen, setisOverflowOpen] = useState(false);
  const [isShowInfo, setisShowInfo] = useState(false);

  const updateTodo = () => {
    menuRef.child(menuItem.id).set({...menuItem,done:!menuItem.done})
  };

  const handleClick = () => {
    setisOverflowOpen(!isOverflowOpen);
  };

  const handleShowInfo = () => {
    setisShowInfo(!isShowInfo);
  }

  const OverflowMenu = () => {
    if (isOverflowOpen) {
      return (
        <div className="menu-card__overflow-menu overflow-menu">
        <button>
          <span className="edit">
            <EditIcon />
          </span>
          Edit item
        </button>
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

  const Stepper = () => 
    <div className="menu-card__stepper">
      <button className="menu-card__stepper--decrease"><span><MinusIcon /></span></button>
      <input type="text" placeholder="0" />
      <button className="menu-card__stepper--increase"><span><PlusIcon /></span></button>
    </div>
  ;

  const AddToCart = () => 
    <button className="button">Add to cart</button>
  ;

  const Ingredients = () => 
    <div className="menu-card__ingredients ingredients">
      <h4 className="ingredients__title">Ingredients:</h4>
      <p className="ingredients__list">{menuItem.ingredients}</p>
    </div>
  ;

  const Nutrition = () => {
    if (isShowInfo) {
      return (
        <div className="menu-card__nutrition nutrition">
          <h4 className="nutrition__title">Nutrition per portion:</h4>
          <ul className="nutrition__list">
            <li className="nutrition__item">
              <h6 className="nutrition__name">Calories</h6>
              <p className="nutrition__amount">N/A</p>
            </li>
            <li className="nutrition__item">
              <h6 className="nutrition__name">Fats</h6>
              <p className="nutrition__amount">N/A g</p>
            </li>
            <li className="nutrition__item">
              <h6 className="nutrition__name">Carbs</h6>
              <p className="nutrition__amount">N/A g</p>
            </li>
            <li className="nutrition__item">
              <h6 className="nutrition__name">Protein</h6>
              <p className="nutrition__amount">N/A g</p>
            </li>
          </ul>
        </div>
      )
    }
    return null;
  };

  return (
    <li className="menu__card menu-card">
      {/* <Switch
        edge="end" checked={todo.done} onChange={updateTodo}
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      /> */}
      <div className="menu-card__admin-view">
        <button onClick={handleClick} className="menu-card__overflow-menu-btn"></button>
        <OverflowMenu />
      </div>
      <img src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt={menuItem.title} className="menu-card__image"/>
      <div className="menu-card__content">
        <p className="menu-card__item-type">{menuItem.preference}</p>
        <div className="menu-card__title-wrapper">
          <h4 className="menu-card__title">{menuItem.title}</h4>
          <h4 className="menu-card__price">{menuItem.price}.00 kr</h4>
        </div>
        <p className="menu-card__description">{menuItem.description}</p>
        <div className="menu-card__addtocart">
          <Stepper />
          <AddToCart />
        </div>
        <Ingredients />
        <Nutrition />
      </div>
      <MoreInformation />
    </li>
  );
}
import React, { useState } from "react";
import { PlusIcon } from "../../assets/icons/Plus";
import { menuRef } from "../Firebase/firebase";
import { NewItemProps } from "./types";

export const NewMenuItemForm = ({ showForm, handleClose }: NewItemProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [label, setLabel] = useState("");
  const [preference, setpreference] = useState("");

  const createMenuItem = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const item = {
      title: title,
      done: false,
      ingredients: ingredients,
      description: description,
      price: price,
      label: label,
      preference: preference,
    };

    menuRef.push(item);
    setTitle("");
    setIngredients("");
    setDescription("");
    setPrice("");
    setpreference("");
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    const target = e.currentTarget as HTMLInputElement;
    const value = target.value;

    if (target.name === 'title') {
      setTitle(value);
      setLabel(value.replace(/\s/g,'').toLowerCase());
    } else if (target.name === 'ingredients') {
      setIngredients(value);
    } else if (target.name === 'description') {
      setDescription(value);
    } else if (target.name === 'price') {
      setPrice(value);
    } else if (target.name === 'preference') {
      setpreference(value);
    }
  };

  const handleClick = () => {
    handleClose();
  }

  return (
    <form onSubmit={ createMenuItem } className="menu-new__form">
      <h2 className="menu-new__form-title">Add new item</h2>
      <button onClick={ handleClick } className="menu-new__close-btn">
        <span className="menu-new__close-icon">
          <PlusIcon />
        </span>
      </button>
      <label htmlFor="preference" className="menu-new__label">
        <select 
          name="preference" 
          id="preference" 
          onChange={ handleSubmit }
          className="menu-new__input menu-new__input--preference"
          defaultValue="Choose food preference"
          required>
          <option value="meat">Meat</option>
          <option value="chicken">Chicken</option>
          <option value="fish">Fish</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
      </label>
      <div className="menu-new__input-wrapper">
        <label htmlFor="title" className="menu-new__label menu-new__label--title">
          <input
            value={ title }
            onChange={ handleSubmit }
            name="title"
            placeholder="Title"
            className="menu-new__input menu-new__input--title"
            required
        /></label>
        <label htmlFor="price" className="menu-new__label menu-new__label--price">
          <input
            value={ price }
            onChange={ handleSubmit }
            name="price"
            placeholder="Price"
            className="menu-new__input menu-new__input--price"
            required
        />.00 kr</label>
      </div>
      <label htmlFor="description" className="menu-new__label">
        <input
          value={ description }
          onChange={ handleSubmit }
          name="description"
          placeholder="Description"
          className="menu-new__input menu-new__input--description"
          required
      /></label>
      <label htmlFor="ingredients" className="menu-new__label">
        <input
          value={ ingredients }
          onChange={ handleSubmit }
          name="ingredients"
          placeholder="Ingredients"
          className="menu-new__input menu-new__input--ingredients"
          required
      /></label>
      <button type="submit" className="menu-new__btn button">Add Item</button>
    </form>
  );
};
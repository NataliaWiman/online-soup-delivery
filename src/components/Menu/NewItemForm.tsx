import React, { useState } from "react";
import { menuRef } from "../Firebase/firebase";

export const NewMenuItemForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [label, setLabel] = useState("");

  const createMenuItem = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const item = {
      title: title,
      done: false,
      ingredients: ingredients,
      description: description,
      price: price,
      label: label,
    };

    menuRef.push(item);
    setTitle("");
    setIngredients("");
    setDescription("");
    setPrice("");
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
    }
  };

  return (
    <form onSubmit={ createMenuItem }>
      <label htmlFor="title">Title</label>
      <input
        value={ title }
        onChange={ handleSubmit }
        name="title"
      />
      <br/>
      <label htmlFor="title">Description</label>
      <input
        value={ description }
        onChange={ handleSubmit }
        name="description"
      />
      <br/>
      <label htmlFor="title">Ingredients</label>
      <input
        value={ ingredients }
        onChange={ handleSubmit }
        name="ingredients"
      />
      <br/>
      <label htmlFor="title">Price</label>
      <input
        value={ price }
        onChange={ handleSubmit }
        name="price"
      />
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
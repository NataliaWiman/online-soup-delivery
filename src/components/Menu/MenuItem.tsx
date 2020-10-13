import React from "react";
import { menuRef } from "../Firebase/firebase";

export const MenuItem = (props: any) => {
  const { menuItem } = props;

  const updateTodo = () => {
    menuRef.child(menuItem.id).set({...menuItem,done:!menuItem.done})
  }

  return (
    <div>
      {/* <Switch
        edge="end" checked={todo.done} onChange={updateTodo}
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      /> */}
      <h4>{menuItem.title}</h4>
      <small>{menuItem.description}</small>
      <p>{menuItem.ingredients}</p>
      <button aria-label="delete" onClick={e => menuRef.child(menuItem.id).remove()}>Delete
      </button>
    </div>
  );
}
import React, {useState, useEffect} from "react";
import { MenuItem } from "./MenuItem";
import { menuRef } from "../Firebase/firebase";

export const MenuList = () => {
  const [menu, setMenu]  = useState<any>([]);

  useEffect(() => {
    menuRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];

      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          ingredients: items[item].ingredients,
          description: items[item].description,
          price: items[item].price,
          label: items[item].label,
          done: items[item].done
        });
      }
      setMenu(newState)
    });
  },[])

  return (
    <>
      {menu.map((item: any, i: number) => (
        <React.Fragment key={item.id}>
          <MenuItem  menuItem={item} />
          {i<menu.length -1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};
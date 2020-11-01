import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ menu }: any) => {
  return (
    <ul className="menu-list">
      {menu.map((item: any, i: number) => (
        <React.Fragment key={item.id}>
          <MenuItem  menuItem={item} />
          {i<menu.length -1}
        </React.Fragment>
      ))}
    </ul>
  );
};
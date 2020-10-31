import React, { useState, useRef, useEffect, useCallback } from "react";

export const MenuFilter = ({handleFilter}: any) => {
  const node: any = useRef([React.createRef(), React.createRef()]);
  const [isActive, setActive] = useState(false);

  const handleFilterChange = (index: any) => {
    if (index === 1) {
      console.log(index);
    }
  }

/*   const handleClickOutside = useCallback(
    (event: any) => {
      if (node && node.current && node.current.contains(event.target)) {
        setActive(true);
        console.log('hey?')
        return; // inside click
      }
      setActive(false); // outside click
      console.log(isActive);
    }, [],
  ); */

  /* useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]); */

  const preferences = ["all", "meat", "chicken", "fish", "vegan"];

  const handleTest = (i: any) => {
    console.log(node.current[i]);
  }

  useEffect(() => {
    node.current[0].current.focus()
  }, []);


  return (
  <div className="menu-filter__wrapper page-width">
    <ul className="menu-filter__list">
      {preferences.map((preference, i) => {
        return (
        <li 
          key={i}
          className={isActive ? "menu-filter__item menu-filter__item--active" : "menu-filter__item"}
          onClick={e => handleTest(i)}
        >
          <button 
            ref={node.current[i]}
            name={preference} 
            onClick={handleFilter}
          >
            {preference}
          </button>
        </li>
      )})}
    </ul>
  </div>
)};
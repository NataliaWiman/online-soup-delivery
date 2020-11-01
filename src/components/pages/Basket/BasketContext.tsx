import React, {useState} from 'react';

export const BasketContext = React.createContext([{}]);

export const BasketProvider = ({ children }: any) => {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider
     value={[
      basket,
      setBasket
     ]}>
      {children} 
   </BasketContext.Provider>
  );
};
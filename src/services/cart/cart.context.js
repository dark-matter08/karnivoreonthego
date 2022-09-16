import React, {createContext, useState, useEffect, useContext} from 'react';
import {AuthenticationContext} from '../authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const {user} = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, {price}) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
      return;
    }
    setCart([...cart, item]);
  };

  const remove = item => {
    const newCart = cart.filter(x => x.placeId !== item.placeId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
        sum,
      }}>
      {children}
    </CartContext.Provider>
  );
};

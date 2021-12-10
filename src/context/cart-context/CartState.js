import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer, {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_AMOUNT,
} from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    showcart: false,
    cartItems: [],
  };

  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const toggleCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const updateItemAmount = (index, amount) => {
    dispatch({ type: UPDATE_AMOUNT, payload: { index, amount } });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        showcart: cartState.showcart,
        addToCart,
        removeItem,
        toggleCart,
        updateItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

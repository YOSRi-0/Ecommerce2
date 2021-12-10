export const SHOW_HIDE_CART = "SHOW_HIDE_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_AMOUNT = "UPDATE_AMOUNT";

const toggleCart = (state) => {
  return { ...state, showcart: !state.showcart };
};

const addItem = (state, item) => {
  return { ...state, cartItems: [...state.cartItems, item] };
};

const removeItem = (state, index) => {
  return {
    ...state,
    cartItems: state.cartItems.filter((item, idx) => idx !== index),
  };
};

const updateItemAmount = (state, { index, amount }) => {
  state.cartItems[index].amount = amount;
  return {
    ...state,
    cartItems: state.cartItems,
  };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART:
      return toggleCart(state);
    case ADD_TO_CART:
      return addItem(state, action.payload);
    case REMOVE_ITEM:
      return removeItem(state, action.payload);
    case UPDATE_AMOUNT:
      return updateItemAmount(state, action.payload);
    default:
      return state;
  }
};

export default CartReducer;

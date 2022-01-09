import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from '../action/cart';
import CartItem from '../../Models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_CART:
      return (state = initialState);
    case ADD_TO_CART:
      const addedProduct = action.product;
      const Count = action.count;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodImage = addedProduct.myImage[0];
      const prodQuantity = Count;
      const sum = prodPrice * prodQuantity;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.objectId]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.objectId].quantity + prodQuantity,
          prodPrice,
          prodTitle,
          state.items[addedProduct.objectId].sum + sum,
          prodImage,
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          prodQuantity,
          prodPrice,
          prodTitle,
          prodPrice * prodQuantity,
          prodImage,
        );
      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.objectId]: updatedOrNewCartItem,
        },
        totalAmount: state.totalAmount + sum,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
  }
  return state;
};

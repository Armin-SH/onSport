export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (product, count) => {
  return { type: ADD_TO_CART, product: product, count: count };
};
export const removeFromCart = productId => {
    return { type: REMOVE_FROM_CART, pid: productId };
}
export const emptyCart = () => {
  return { type: EMPTY_CART}
}
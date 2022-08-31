import {
  ADD_PRODUCT_API,
  ADD_TO_CART,
  DELETE_PRODUCT_API,
  DELETE_PRODUCT_CART,
  GET_ALL_PRODUCT_API,
  GET_LIST_PRODUCT_API,
} from "../contants/contants";

export const getListProductAction = (payload) => ({
  type: GET_LIST_PRODUCT_API,
  payload,
});
export const getProductAction = (payload) => ({
  type: GET_ALL_PRODUCT_API,
  payload,
});
export const addProductAction = (payload) => ({
  type: ADD_PRODUCT_API,
  payload,
});
export const deleteProductAction = (payload) => ({
  type: DELETE_PRODUCT_API,
  payload,
});

//add to cart
export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
export const deleteToCart = (payload) => ({
  type: DELETE_PRODUCT_CART,
  payload,
});

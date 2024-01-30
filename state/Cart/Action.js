import { api } from "@/config/apiConfig";
import {
  ADD_PRODUCT_TO_CART_FAILURE,
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  DELETE_PRODUCT_FROM_CART_FAILURE,
  DELETE_PRODUCT_FROM_CART_REQUEST,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  UPDATE_PRODUCT_IN_CART_FAILURE,
  UPDATE_PRODUCT_IN_CART_REQUEST,
  UPDATE_PRODUCT_IN_CART_SUCCESS,
} from "./ActionType";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  try {
    const { data } = await api.get("user/cart");

    dispatch({ type: GET_CART_SUCCESS, payload: data[0] });
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

export const addProductToCart = (req) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_CART_REQUEST });
  console.log(req);
  try {
    const { data } = await api.post("user/cart", req);
    dispatch({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeProductFromCart = (productId) => async (dispatch) => {
  console.log(productId);
  dispatch({ type: DELETE_PRODUCT_FROM_CART_REQUEST });
  try {
    const { data } = await api.delete(`user/delete-product-cart/${productId}`);
    console.log(data);
    dispatch({ type: DELETE_PRODUCT_FROM_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FROM_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const updateProductInCart = (req) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_IN_CART_REQUEST });
  console.log(req.quantity);
  try {
    const { data } = await api.delete(
      `user/update-product-cart/${req.id}/${req.quantity}`
    );
    console.log(data);
    dispatch({ type: UPDATE_PRODUCT_IN_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_IN_CART_FAILURE, payload: error.message });
  }
};

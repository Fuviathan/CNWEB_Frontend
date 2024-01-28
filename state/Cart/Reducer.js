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

const initialState = {
  cart: null,
  cartItem: null,
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
    case DELETE_PRODUCT_FROM_CART_REQUEST:
    case UPDATE_PRODUCT_IN_CART_REQUEST:
    case ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_PRODUCT_TO_CART_SUCCESS:
    case UPDATE_PRODUCT_IN_CART_SUCCESS:
    case DELETE_PRODUCT_FROM_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        cartItem: action.payload,
      };
    }

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cart: action.payload,
      };

    case GET_CART_FAILURE:
    case DELETE_PRODUCT_FROM_CART_FAILURE:
    case UPDATE_PRODUCT_IN_CART_FAILURE:
    case ADD_PRODUCT_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
import {
  GET_ALL_BRAND_FAILURE,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
} from "../Products/ActionType";
import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
    case GET_ALL_BRAND_REQUEST:
    case DELETE_IMAGE_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case ADD_BRAND_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brands: action.payload,
      };
    case ADD_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brand: action.payload,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        image: action.payload,
      }
    case DELETE_PRODUCT_SUCCESS:
    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      }
    case GET_ALL_BRAND_FAILURE:
    case UPLOAD_IMAGE_FAILURE:
    case DELETE_IMAGE_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case ADD_BRAND_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_ALL_USER_REQUEST:
    case GET_ALL_USER_SUCCESS:
      return {...state, isLoading: false, error: null, allUser: action.payload}
    case GET_ALL_USER_FAILURE:
      return {...state, isLoading: false, error: action.payload}
    // case LOGOUT:
    //   return { ...initialState, jwt: "" };

    default:
      return state;
  }
};

import {
  GET_ALL_BRAND_FAILURE,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
} from "../Products/ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRAND_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brands: action.payload,
      };

    case GET_ALL_BRAND_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    // case LOGOUT:
    //   return { ...initialState, jwt: "" };

    default:
      return state;
  }
};
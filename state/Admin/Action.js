import { api } from "@/config/apiConfig";
import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
} from "./ActionType";

export const addNewBrand = (req) => async (dispatch) => {
  dispatch({ type: ADD_BRAND_REQUEST });
  try {
    const { data } = await api.post("/brand", req);
    alert("Thêm nhãn hàng thành công") ? "" : location.reload();
    dispatch({ type: ADD_BRAND_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ADD_BRAND_FAILURE, payload: e.message });
    alert(e.message) ? "" : location.reload();
  }
};

export const deleteBrand = (brandId) => async (dispatch) => {
  dispatch({ type: DELETE_BRAND_REQUEST });
  try {
    const { data } = api.delete(`/brand/${brandId}`);

    dispatch({ type: DELETE_BRAND_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_BRAND_FAILURE, payload: e.message });
  }
};

export const addNewCategory = (req) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  try {
    const { data } = api.post("/prodcategory", req);

    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: e.message });
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  try {
    const { data } = api.delete(`/prodcategory/${categoryId}`);

    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_CATEGORY_FAILURE, payload: e.message });
  }
};

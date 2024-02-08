import { api, API_BASE_URL } from "@/config/apiConfig";
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
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_REQUEST,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_REQUEST
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
    alert('Xóa thành công') ? "" : location.reload()
    dispatch({ type: DELETE_BRAND_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_BRAND_FAILURE, payload: e.message });
    alert(e.message) ? "" : location.reload();
  }
};

export const addNewCategory = (req) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  try {
    const { data } = await api.post("/prodcategory", req);

    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
    alert('Thêm thành công')
  } catch (e) {
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: e.message });
    alert('Lỗi')
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  try {
    const { data } = api.delete(`/prodcategory/${categoryId}`);
    alert('Xóa thành công') ? "" : location.reload()
    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_CATEGORY_FAILURE, payload: e.message });
    alert(e.message) ? "" : location.reload();
  }
};

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USER_REQUEST });
  try {
    const { data } = await api.get(`user/all-user`);
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_USER_FAILURE, payload: error.message });
  }
};

export const uploadImg = (req) => async (dispatch) => {
  var formData = new FormData()  
  req.map((i) => formData.append("images", i))
  dispatch({ type: UPLOAD_IMAGE_REQUEST });
  console.log(formData)
  try {
    const { data } = await api.post(`/upload`, formData, {headers: {"Content-Type": "multipart/form-data",}});
    dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: data });
    console.log(data)
  } catch (error) {
    dispatch({ type: UPLOAD_IMAGE_FAILURE, payload: error.message });
    console.log(error)
  }
};
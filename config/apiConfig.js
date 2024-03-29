import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Hàm để lấy token từ localStorage
const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user") || "";
  }
  return "";
};

// Tạo một instance của Axios với các cài đặt cơ bản
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để thêm token vào mỗi request
api.interceptors.request.use((config) => {
  const user = JSON.parse(getTokenFromLocalStorage());
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

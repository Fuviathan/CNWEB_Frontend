import axios from "axios";

export const API_BASE_URL = "http://localhost:3000/api/";

let getTokenFromLocalStorage;
if (typeof window !== "undefined") {
  getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
} else {
  console.error("localStorage is not available in this environment");
}

const token = getTokenFromLocalStorage?.token || "";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

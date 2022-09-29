import { DEFAULT_API_CONFIG } from "./api-config";
import axios from "axios";

/**
 * Manages all requests to the API.
 */
export const API = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
});

export const Headers = (token) => {
  if (token) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      token,
    };
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

API.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.get["Content-Type"] = "application/json";

API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => Promise.reject(error)
);

export * from "./auth.service";

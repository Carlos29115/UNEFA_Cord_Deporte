// Vendors
import axios, { AxiosInstance } from "axios";
import { localToken } from "../constants";
import { removeItemLocal } from "utils/helpers";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;
//const BASE_URL = 'http://172.17.200.200:3333/api';

/**
 * Definición de la conexión con la API
 */
const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (403 === error.response.status || 401 === error.response.status) {
      removeItemLocal(localToken);
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default API;

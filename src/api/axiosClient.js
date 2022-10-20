import axios from "axios";
import queryString from "query-string";
import { TELEPHONE_API_URL } from "../constans";

const axiosClient = axios.create({
  baseURL: TELEPHONE_API_URL,
  headers: {
    "content-text": "application/json"
  },
  paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosClient;

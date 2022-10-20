import axiosClient from "./axiosClient";
import {
  TELEPHONE_API_LOGIN,
  TELEPHONE_API_LOGOUT,
  TELEPHONE_STORE,
  TELEPHONE_ORDER,
  TELEPHONE_CARD,
  TELEPHONE_STATISTICS,
  TELEPHONE_DISCOUNT,
  TELEPHONE_PUBLISHERS
} from "../constans";

const telephoneAPI = {
  loginAPI: (params) => {
    return axiosClient.post(TELEPHONE_API_LOGIN, { ...params });
  },

  logoutAPI: () => {
    return axiosClient.get(TELEPHONE_API_LOGOUT);
  },

  telephoneDashboardAPI: () => {
    return axiosClient.get(TELEPHONE_STATISTICS);
  },

  telephoneAddStoreAPI: (params) => {
    return axiosClient.post(TELEPHONE_STORE, { ...params });
  },

  telephoneStoreAPI: (params) => {
    return axiosClient.get(TELEPHONE_STORE, { ...params });
  },

  telephoneOrderAPI: (params) => {
    return axiosClient.get(TELEPHONE_ORDER, { ...params });
  },

  telephoneCardAPI: (params) => {
    return axiosClient.get(TELEPHONE_CARD, { ...params });
  },

  telephoneDiscountdAPI: () => {
    return axiosClient.get(TELEPHONE_DISCOUNT);
  },

  telephoneAddDiscountdAPI: (params) => {
    return axiosClient.patch(TELEPHONE_DISCOUNT, { ...params });
  },

  telephonePublishersAPI: (params) => {
    return axiosClient.get(TELEPHONE_PUBLISHERS, { ...params });
  },

  telephoneAddPublishersAPI: (params) => {
    return axiosClient.post(TELEPHONE_PUBLISHERS, { ...params });
  }
};

export default telephoneAPI;

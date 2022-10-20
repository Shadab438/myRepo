import telephoneAPI from "../api/index";

export const user = {
  login: async (user) => {
    const response = await telephoneAPI.loginAPI(user);
    localStorage.setItem("token", response.data.data.jwt);
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      return true;
    }
    return false;
  },

  logout: async () => {
    const response = await telephoneAPI.logoutAPI();
    localStorage.removeItem("token");
    return response;
  }
};

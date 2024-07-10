import axios from "axios";
const LOGIN_API_URL = "http://localhost:8080/auth/";

class LoginService {
  async login(username, password) {
    const response = await axios.post(LOGIN_API_URL + "login", {
      username,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getAuthHeader() {
    const user = this.getCurrentUser();
    if (user && user.token) {
      return { Authorization: "Bearer " + user.token };
    } else {
      return {};
    }
  }
}

export default new LoginService();

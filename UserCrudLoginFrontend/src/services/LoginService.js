import axios from "axios";
const LOGIN_API_URL = "http://localhost:8080/auth/";

class LoginService {
  async login(username, password) {
    const response = await axios.post(LOGIN_API_URL + "login", {
      username,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("token", (response.data.token));
      localStorage.setItem("role", (response.data.role));
      console.log(response.data)
      console.log(localStorage.getItem("token"))
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  getCurrentUser() {
    return localStorage.getItem("token");
  }

  getAuthHeader() {
    const user = this.getCurrentUser();
    if (user) {
      return { Authorization: "Bearer " + user };
    } else {
      return {};
    }
  }
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  isAdmin() {
    const role = localStorage.getItem("role");
    return role === "[ADMIN]";
  }

  isUser() {
    const role = localStorage.getItem("role");
    return role === "[USER]";
  }

  adminOnly() {
    console.log(this.isAdmin())
    return this.isAuthenticated() && this.isAdmin();
  }
}

export default new LoginService();

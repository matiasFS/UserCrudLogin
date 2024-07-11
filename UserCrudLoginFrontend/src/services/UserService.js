import axios from "axios";
import LoginService from "./LoginService";
const CUSTOMER_API_URL = "http://localhost:8080/api/users";
const ROLE_API = "http://localhost:8080/api";

class UserService {
  async getAll() {
    const response = await fetch(CUSTOMER_API_URL, {
      method: "GET",
      headers: LoginService.getAuthHeader(),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }
    return response.json();
  }

  async getUserById(id) {
    try {
      return await axios.get(`${CUSTOMER_API_URL}/${id}`, {
        headers: LoginService.getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to fetch customer: " + error.message);
    }
  }

  async updateUser(userID, user) {
    try {
      return await axios.put(`${CUSTOMER_API_URL}/${userID}`, user, {
        headers: LoginService.getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to update customer: " + error.message);
    }
  }
  async deleteUser(userID) {
    try {
      return await axios.delete(`${CUSTOMER_API_URL}/${userID}`, {
        headers: LoginService.getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to delete customer: " + error.message);
    }
  }

  async changePassword(password) {
    try {
      return await axios.put(`${CUSTOMER_API_URL}/changePassword`, password, {
        headers: LoginService.getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to change password: " + error.message);
    }
  }
}

export default new UserService();

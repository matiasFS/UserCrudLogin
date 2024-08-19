import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from '../services/UserService.js'; // Ajusta la ruta según corresponda

export default function useChangePassword() {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const { oldPassword, newPassword } = password;
  const navigate = useNavigate();

  const changePassword = (e) => {
    e.preventDefault();

    UserService.changePassword(password).then((res) => {
      alert("Password changed correctly");
      navigate("/home");
    });
  };

  return {
    oldPassword,
    newPassword,
    setPassword,
    changePassword,
  };
}
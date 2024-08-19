import { useState, useEffect } from "react";
import UserService from '../services/UserService'; // Ajusta la ruta según corresponda
import LoginService from '../services/LoginService'; // Ajusta la ruta según corresponda

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAll().then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    try {
      if (!window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        return;
      }

      UserService.deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error eliminando el usuario:", error);
      alert("Hubo un error eliminando el usuario. Por favor, intenta nuevamente.");
    }
  };

  return {
    users,
    deleteUser,
    isAdmin: LoginService.adminOnly(),
  };
}

import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

export default function ListOfUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getAll().then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    try {
      // Opcional: mostrar un mensaje de confirmación
      if (
        !window.confirm("¿Estás seguro de que deseas eliminar este usuario?")
      ) {
        return;
      }

      // Llamar al servicio para eliminar el usuario
      UserService.deleteUser(id);

      // Actualizar el estado de los usuarios
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      // Manejar el error
      console.error("Error eliminando el usuario:", error);
      // Opcional: mostrar un mensaje de error al usuario
      alert(
        "Hubo un error eliminando el usuario. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Lista de usuarios</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>Email</th>
              <th>Pais</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>
                  <Link to={`/update/${user.id}`} className="btn btn-primary">
                    Actualizar
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/home" className="btn btn-primary">
          Volver a inicio
        </Link>
      </div>
    </>
  );
}

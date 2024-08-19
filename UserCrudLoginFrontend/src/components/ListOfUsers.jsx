import { Link } from "react-router-dom";
import useUsers from "../hooks/useUser.js"; // Importa el hook
import "./ListOfUsers.css";

export default function ListOfUsers() {
  const { users, deleteUser, isAdmin } = useUsers();

  return (
    <div className="container">
      <div className="items">
        <h2 className="title">Users list</h2>
        <span className="userLength">{users.length}</span>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Country</th>
            {isAdmin && <th>Role</th>}
            {isAdmin && <th>Acciones</th>}
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
              {isAdmin && <td>{user.role}</td>}
              {isAdmin && (
                <td className="button-cell">
                  <Link to={`/update/${user.id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/home" className="btn btn-primary">
        Go back
      </Link>
    </div>
  );
}

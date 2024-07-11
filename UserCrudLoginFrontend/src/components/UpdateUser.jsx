import { useEffect, useState } from "react";
import UserSer from "../services/UserService";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function UpdateUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    role: "",
  });
  const { id } = useParams();

  const { firstName, lastName, username, email, country, role } = user;
  const navigate = useNavigate();

  const saveOrUpdateUser = (e) => {
    e.preventDefault();

    if (id) {
      UserSer.updateUser(id, user)
        .then((res) => {
          alert("Usuario actualizado correctamente");
          navigate("/users");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      UserSer.getUserById(id)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="text-center">Actualizar usuario</h2>
        <form onSubmit={saveOrUpdateUser}>
          <div className="form-group">
            <label>Nombre</label>

            {user && (
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            )}
          </div>
          <div className="form-group">
            <label>Apellido</label>
            {user && (
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            )}
          </div>
          <div className="form-group">
            <label>Username</label>
            {user && (
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            {user && (
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            )}
          </div>
          <div className="form-group">
            <label>Pais</label>
            {user && (
              <input
                type="text"
                className="form-control"
                value={country}
                onChange={(e) => setUser({ ...user, country: e.target.value })}
              />
            )}
          </div>
          <div className="form-group">
            <label>Role</label>
            {user && (
              <select
                name="roles"
                id="rol"
                value={role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option>USER</option>
                <option>ADMIN</option>
              </select>
            )}
          </div>
          <button
            className="btn btn-primary"
            onClick={(e) => saveOrUpdateUser(e)}
          >
            Actualizar
          </button>
          <Link to="/users" className="btn btn-primary">
            Back to users
          </Link>
        </form>
      </div>
    </>
  );
}

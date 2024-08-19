import { Link } from "react-router-dom";
import useChangePassword from "../hooks/useChangePassword.js"; // Importa el hook

export default function ChangePassword() {
  const { oldPassword, newPassword, setPassword, changePassword } = useChangePassword();

  return (
    <div className="container">
      <h2 className="text-center">Change password: </h2>
      <form onSubmit={changePassword}>
        <div className="form-group">
          <label>Old password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Type old password"
            value={oldPassword}
            onChange={(e) =>
              setPassword({ oldPassword: e.target.value, newPassword })
            }
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Type new password"
            value={newPassword}
            onChange={(e) =>
              setPassword({ oldPassword, newPassword: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => changePassword(e)}>Save changes</button>
      </form>
      <Link to="/home" className="btn btn-primary">Go back</Link>
    </div>
  );
}

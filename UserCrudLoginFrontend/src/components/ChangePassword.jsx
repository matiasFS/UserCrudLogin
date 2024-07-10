import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { useState } from "react";

export default function ChangePassword() {
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
              setPassword({ ...password, oldPassword: e.target.value })
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
              setPassword({ ...password, newPassword: e.target.value })
            }
          />
        </div>
        <button className="btn btn-success" onClick={(e) => changePassword(e)}>Save changes</button>
      </form>
      <Link to="/home" className="btn btn-primary">Go back</Link>

    </div>
  );
}

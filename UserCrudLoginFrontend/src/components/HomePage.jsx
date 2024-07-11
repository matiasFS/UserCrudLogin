import { Link, useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    LoginService.logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div className="container">
        <Link to="/users" className="btn btn-primary">
          View users
        </Link>

        <Link to="/changePassword" className="btn btn-primary">
          Change password
        </Link>

        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
}

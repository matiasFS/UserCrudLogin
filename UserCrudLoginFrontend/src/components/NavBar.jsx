import { Link, useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import "./navbar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    LoginService.logout();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-links left">
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <ul className="nav-links right">
            <li>
              <Link to="/users">Users</Link>
            </li>
            
          </ul>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  );
}

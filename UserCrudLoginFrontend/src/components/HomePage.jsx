import { Link, useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import "./homepage.css";
export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    LoginService.logout();
    navigate("/");
  };

  return (
    <div>
        <h1>Welcome</h1>
        <div>
          <Link to="/changePassword">Change password</Link>
        </div>
    </div>
  );
}

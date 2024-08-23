import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import './navbar.css'; // Asegúrate de tener un archivo CSS para los estilos

export default function NavBar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    LoginService.logout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-links left">
            <Link className="link" to="/home">
              Home
            </Link>
          </div>
          <div className="nav-links right">
            <Link className="link" to="/users">
              Users
            </Link>
           
            <div className="dropdown">
              <button className="nav-button" onClick={toggleDropdown}>
                Menu
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

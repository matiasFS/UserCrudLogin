import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LoginService.login(username, password);
      navigate("/home");
    } catch (error) {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="form-container">
        <div className="form-login">
          <div className="form-title">
            <h2>Iniciar sesión</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="form-error">{error}</div>}

            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
    </div>
  );
}

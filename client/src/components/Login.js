import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Vérification de la concordance login/pwd via l’API
  const login = async (e) => {
    e.preventDefault();
    try {
      // on vérifie que l’utilisateur existe et on récupère son JWT généré par le serveur
      const { data } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      // Créer un cookie de session pour contenir le JWT
      Cookies.set("authToken", data.token);
      handleLogin(true);
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <header className="Header">
        <h1>Login</h1>
      </header>
      <form onSubmit={login}>
        <div className="loginForm">
          <input
            className="primary_input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="primary_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="login_button">
          <button type="submit" className="primary_button">
            Se Connecter
          </button>
          <Link to="/">
            <button className="primary_button">Retour</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register({ history }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Vérification de la non-existence de l’utilisateur via l’API
    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', { username, password });
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('User already exists');
        }
    };
    return (
        <div>
      <header className="Header">
        <h1>Register</h1>
      </header>
            <form onSubmit={register}>
            <div className="registerForm">
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
        <div className="register_button">
          <button type="submit" className="primary_button">
            S'inscrire
          </button>
          <Link to="/">
            <button className="primary_button">Retour</button>
          </Link>
        </div>
            </form>
        </div>
    );
}
export default Register;
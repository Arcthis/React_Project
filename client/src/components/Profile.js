import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            // On cherche le token dans le cookie
            const token = Cookies.get('authToken');
            if (!token) return; // pas de token => pas connecté
            try {
                // On récupère l'utilisateur en DB en passant le token dans
                // l'en-tête HTTP authorization qui sera lue côté serveur
                const { data } = await axios.get('/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(data); // mise à jour de l'état
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, []);
    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    {user._id === "666999016f53083a1b4c0935" && (
                        <Link to="/addproduction">
                            <button className="primary_button">Ajouter Une Production</button>
                        </Link>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        <Link to="/">
            <button className="primary_button">Retour</button>
        </Link>
        </div>
    );
}
export default Profile;
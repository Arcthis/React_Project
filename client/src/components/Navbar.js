import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ isAuthenticated, handleLogin, handleLogout }) => {
    return (
        <nav className='navbarClass'>
            <ul className='navbarList'>
                <li>
                    <Link to="/">
                        <button className="primary_button">Accueil</button>
                    </Link>
                </li>
                {isAuthenticated ?
                    <>
                        <li>
                            <Link to="/profile">
                                <button className="primary_button">Profile</button>
                            </Link>
                        </li>
                        <Logout handleLogout={handleLogout} />
                    </> :
                    <>
                        <li>
                            <Link to="/register">
                                <button className="primary_button">Inscription</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <button className="primary_button">Connexion</button>
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
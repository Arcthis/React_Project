import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
    // Vérifie si le token existe
    const token = Cookies.get('authToken');
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
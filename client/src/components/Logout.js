import React from 'react';

function Logout({ handleLogout }) {
    return (
        <button className="primary_button" onClick={handleLogout}>Déconnexion</button>
    );
};

export default Logout;
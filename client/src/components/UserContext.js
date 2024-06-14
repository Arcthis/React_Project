import React, { createContext, useState } from 'react';
import '../App.css';

// Créez le contexte utilisateur
export const UserContext = createContext();

// Fournissez le contexte utilisateur à l'application
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null signifie que l'utilisateur n'est pas connecté

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importez les composants nécessaires de react-router-dom
import "./App.css";

import Prods from "./Prods";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bienvenue sur mon site de vente de prods !</h1>
          <Link to="/prods" className="primary_button">Voir les prods</Link>
        </header>
        <footer className="App-footer">
          <p>&copy; 2024 Tous droits réservés</p>
        </footer>
      </div>

      <Routes>
        <Route path="/prods" element={<Prods />} />
      </Routes>
    </Router>
  );
}

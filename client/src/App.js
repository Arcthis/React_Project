import { Route, Routes } from "react-router-dom";
import "./App.css";
import Prods from "./components/Prods";
import Cart from "./components/Cart";
import ProdDetails from "./components/ProdDetails";
import Login from "./components/Login";
import React, { useEffect, useState } from 'react';
import Register from './components/Register';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Cookies from 'js-cookie';
import Home from './components/Home';
import AddProduction from "./components/AddProduction";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = async () => {
    Cookies.remove('authToken');
    await fetch('/api/auth/logout')
      .then((res) => res.json())
      .then((data) => { console.log(data.message) });
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
        <Route path="/prods" element={<Prods />} />
        <Route path="/prods/:_id" element={<ProdDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login handleLogin={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/addproduction" element={<AddProduction />} />
      </Routes>
    </div>
  );
}

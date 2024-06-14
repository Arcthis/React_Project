import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  return (
    <div className="Cart">
      <header className="Header">
          <div id='prods_link'>
            <Link to="/prods">
              <button className="primary_button">Prods</button>
            </Link>
            <Link to="/">
              <button className="primary_button">Retour</button>
            </Link>
          </div>
        <h1>Panier</h1>
      </header>
      <div id="cart-overview">
        {cartItems.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} (Genre: {item.genre})</p>
              <button className="primary_button" onClick={() => removeItem(item.id)}>Retirer</button>
            </div>
          ))
        )}
      </div>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import productionsData from '../img/data.json';

export default function Prods() {
  const [genreFilter, setGenreFilter] = useState(null);
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    setProductions(productionsData);
  }, []);

  const handleGenreFilter = (event) => {
    setGenreFilter(event.target.value);
  };

  const filteredProductions = genreFilter
    ? productions.filter((prod) => prod.genre === genreFilter)
    : productions;

  return (
    <div className='Prods'>
      <header className="Header">
        <h1>Prods</h1>
        <div id = 'cart_link'>
          <Link to="/cart">
            <button className="primary_button">Panier</button>
          </Link>
        </div>
      </header>
      <div className='Filters'>
        <div id='Filter1'>
          <select className="filter_button" onChange={handleGenreFilter}>
            <option value="">Tous les styles</option>
            <option value="Trap">Trap</option>
            <option value="BoomBap">BoomBap</option>
            <option value="Drill">Drill</option>
            <option value="Rage">Rage</option>
          </select>
        </div>
      </div>
      <section className='Prods_kanban'>
        {filteredProductions.map((prod) => (
          <div key={prod.id} id={`Prod${prod.id}`}>
            <Link to={`/prods/${prod.id}`}>
              <button className="prods_button">{prod.name}</button>
            </Link>
          </div>
        ))}
      </section>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}


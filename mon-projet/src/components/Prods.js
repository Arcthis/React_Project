import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Prods() {
  const [genreFilter, setGenreFilter] = useState(null);

  const handleGenreFilter = (event) => {
    setGenreFilter(event.target.value);
  };

  const productions = [
    { id: 1, name: 'Prod 1', genre: 'Trap' },
    { id: 2, name: 'Prod 2', genre: 'BoomBap' },
    { id: 3, name: 'Prod 3', genre: 'Drill' },
    { id: 4, name: 'Prod 4', genre: 'Trap' },
    { id: 5, name: 'Prod 5', genre: 'BoomBap' },
    { id: 6, name: 'Prod 6', genre: 'Drill' },
    { id: 7, name: 'Prod 7', genre: 'Rage' },
    { id: 8, name: 'Prod 8', genre: 'Trap' },
    { id: 9, name: 'Prod 9', genre: 'Rage' },
  ];

  const filteredProductions = genreFilter
    ? productions.filter((prod) => prod.genre === genreFilter)
    : productions;

  return (
    <div className='Prods'>
      <header className="Header">
        <h1>Prods</h1>
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


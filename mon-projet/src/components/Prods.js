import React, { useState } from 'react';
import '../App.css';

function Prods() {
  const [genreFilter, setGenreFilter] = useState(null);

  const handleGenreFilter = (event) => {
    setGenreFilter(event.target.value);
  };

  const productions = [
    { name: 'Prod 1', genre: 'Trap' },
    { name: 'Prod 2', genre: 'BoomBap' },
    { name: 'Prod 3', genre: 'Drill' },
    { name: 'Prod 4', genre: 'Trap' },
    { name: 'Prod 5', genre: 'BoomBap' },
    { name: 'Prod 6', genre: 'Drill' },
    { name: 'Prod 7', genre: 'Rage' },
    { name: 'Prod 8', genre: 'Trap' },
    { name: 'Prod 9', genre: 'Rage' },
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
        {filteredProductions.map((prod, index) => (
          <div key={index} id={`Prod${index + 1}`}>
            <button className="prods_button">{prod.name}</button>
          </div>
        ))}
      </section>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default Prods;


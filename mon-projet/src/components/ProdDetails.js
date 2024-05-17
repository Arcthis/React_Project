import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import productionsData from '../img/data.json';

export default function ProdDetails() {
  const { id } = useParams();
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    setProductions(productionsData);
  }, []);

  const production = productions.find(prod => prod.id === parseInt(id));
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!production) {
    return <div>Production non trouvée</div>;
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleProgressChange = (e) => {
    const currentTime = (audioRef.current.duration / 100) * e.target.value;
    audioRef.current.currentTime = currentTime;
    setProgress(e.target.value);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === production.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...production, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className='ProdDetails'>
      <header className="Header">
        <h1>Détails de la {production.name}</h1>
      </header>
      <div>
        <div className='ProdInfo'>
          <h3>Description de la prod</h3>
          <p>Genre: {production.genre}</p>
          <p>Nom: {production.name}</p>
        </div>
        <div className="audio-player">
          <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
            <source src={production.audioSrc} type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
          <div className="audio-controls">
            <button onClick={handlePlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div className="audio-progress">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
              />
            </div>
          </div>
        </div>
        <div id="action_prods">
          <Link to="/prods">
            <button className="secondary_button">Retour</button>
          </Link>
          <button className="secondary_button" onClick={addToCart}>Ajouter</button>
        </div>
      </div>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}

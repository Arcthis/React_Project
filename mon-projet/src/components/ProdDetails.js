import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import ShoppingBasket from './ShoppingBasket.js';


export default function ProdDetails() {
  const { id } = useParams();
  const productions = [
    { id: 1, name: 'Prod 1', genre: 'Trap', audioSrc: '/audio/Prod1.mp3'},
    { id: 2, name: 'Prod 2', genre: 'BoomBap' },
    { id: 3, name: 'Prod 3', genre: 'Drill' },
    { id: 4, name: 'Prod 4', genre: 'Trap' },
    { id: 5, name: 'Prod 5', genre: 'BoomBap' },
    { id: 6, name: 'Prod 6', genre: 'Drill' },
    { id: 7, name: 'Prod 7', genre: 'Rage' },
    { id: 8, name: 'Prod 8', genre: 'Trap' },
    { id: 9, name: 'Prod 9', genre: 'Rage' },
  ];

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
        <button className="secondary_button" onClick={() => ShoppingBasket(production)}>
            Ajouter
        </button>
      </div>
      </div>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
      <ShoppingBasket />
    </div>
  );
}

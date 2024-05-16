import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Prods from './components/Prods';
import Playlist from './img/Playlist.png';
import Mixer from './img/Mixer.png';
import Pianoroll from './img/Piano_roll.png';

function PlaylistImg() {
  return <img src={Playlist} alt="Playlist" class="resized-img"/>
}

function MixerImg() {
  return <img src={Mixer} alt="Mixer" class="resized-img"/>
}

function PianorollImg() {
  return <img src={Pianoroll} alt="Pianoroll" class="resized-img"/>
}

function Home() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Bienvenue sur mon site de vente de prods !</h1>
      </header>
      <body>
      <div id="home">
        <div id="description">
          <h3>Contexte</h3>
            <p id="prodsDescription">Les productions musicales présentées sur ce site sont principalement orientées vers l'univers rap/hip-hop/R&B
            <ul>
              <li>Electro</li>
              <li>Rage</li>
              <li>Hyperpop</li>
              <li>Detroit</li>
              <li>Trap</li>
              <li>Drill</li>
            </ul>
            </p>
          <Link to="/prods">
          <button className="primary_button">Voir les prods</button>
          </Link>
        </div>
        {/* <div id="screenshots">
          <div className="row">
            <div className="screen">
              <PlaylistImg />
            </div>
            <div className="screen">
              <MixerImg />
            </div>
          </div>
          <div className="row">
            <div className="screen">
              <PianorollImg />
            </div>
          </div> */}
        {/* </div> */}
      </div>
      </body>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prods" element={<Prods />} />
        </Routes>
      </div>
    </Router>
  );
}

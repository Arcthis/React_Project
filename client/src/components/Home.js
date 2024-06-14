import React from "react";
import { Link } from "react-router-dom";
// import Playlist from "../img/Playlist.png";
// import Mixer from "../img/Mixer.png";
// import Pianoroll from "../img/Piano_roll.png";
import Navbar from "./Navbar";

// function PlaylistImg() {
//   return <img src={Playlist} alt="Playlist" className="resized-img" />;
// }

// function MixerImg() {
//   return <img src={Mixer} alt="Mixer" className="resized-img" />;
// }

// function PianorollImg() {
//   return <img src={Pianoroll} alt="Pianoroll" className="resized-img" />;
// }

export default function Home({ isAuthenticated, handleLogout }) {
  return (
    <div className="App">
      <header className="Header">
        <h1>Bienvenue sur mon site de vente de prods !</h1>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      </header>
      <div id="home">
        <div id="description">
          <h3>Contexte</h3>
          <p id="prodsDescription">
            Les productions musicales présentées sur ce site sont principalement
            orientées vers l'univers rap/hip-hop/R&B
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
          </div>
        </div> */}
      </div>
      <footer className="Footer">
        <p>&copy; 2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}

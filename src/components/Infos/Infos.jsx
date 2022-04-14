import React from 'react';
import Navbar from "../NavBar/NavBar";
import "./Infos.css";

function Infos() {
  return (
    <div>
      <Navbar/>
      <h1>Infos</h1>
      <br></br>
      <h2> Le Championnat de France VMA 2022 est maintenant ouvert! </h2>
      <br></br>
      <h3>
        Retrouvez toutes les dates dans notre calendrier. Attention, quelques
        modifications ont eu lieu dans le règlement cette année concernant
        l'endurance. N'oubliez pas de vérifier les nouvelles dispositions
      </h3>
    </div>
  );
}

export default Infos
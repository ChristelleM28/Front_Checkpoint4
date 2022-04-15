import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container-home">
        <img src="/assets/image-moto.png" alt="image moto" width="100%" />

        <h1 className="h1-home">Partageons notre passion</h1>
      </div>
      <h3>
        Passionnés de moto depuis des années, nous souhaitons partager avec vous
        les informations et les moments importants.
        <br />
        <br />
        Comme nous aimons l'échange, n'hésitez pas également à nous contacter!
      </h3>

      <h4>Bonne visite !</h4>

      <div className="img-moto-accueil">
        <NavLink to="/infos">
          <img src="/assets/blanc_Pau.jpg" alt="entrez" />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;

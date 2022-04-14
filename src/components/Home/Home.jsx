import React from "react";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <div>
      <div className="container-home">
        <img src="/assets/image-moto.png" alt="image moto" width="100%" />
        <NavBar />
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
    </div>
  );
}

export default Home;

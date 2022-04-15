import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Circuits.css";

function Circuits() {
const [circuits, setCircuits] = useState([]);

useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CHECKPOINT4_URL}/api/circuits`)
      .then(({ data }) => {
        setCircuits(data);
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Circuits</h1>
        <div className="container-carousel">
          <Carousel
            infiniteLoop
            thumbWidth={80}
            thumbindicator={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
          >
            {circuits &&
              circuits.map((circuit) => (
                <div key={circuit.id}>
                  <img
                    src={circuit.assets_circuit}
                    alt=""
                    className="img-size"
                  />
                  <div className="overlay">
                    <h3 className="overlay-title">{circuit.name}</h3>
                    <p className="overlay-description">
                      {circuit.time}
                      <br /> <br />
                      {circuit.address}
                    </p>
                  </div>
                </div>
              ))}

          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Circuits;

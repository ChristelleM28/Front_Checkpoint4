import React from "react";
import NavBar from "../NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Calendrier.css";

function Calendrier() {
  return (
    <div>
      <NavBar />
      <h1> Calendrier</h1>
      <div className ="container-carousel">
        <Carousel
          infiniteLoop
          thumbWidth={80}
          thumbindicator={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" />
            <p className="legend">Legend 1</p>
          </div>

          <div>
            <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__340.jpg" />
            <p className="legend">Legend 5</p>
          </div>

          <div>
            <img src="https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810__340.png" />
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </div>

    </div>
  );
}

export default Calendrier;

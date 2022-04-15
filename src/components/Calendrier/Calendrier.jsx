import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import "./Calendrier.css";

function Calendrier() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CHECKPOINT4_URL}/api/calendar`)
      .then(({ data }) => {
        setCalendar(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1> Calendrier</h1>
        <div className="container-carousel">
          <Carousel
            infiniteLoop
            thumbWidth={80}
            thumbindicator={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
          >
            {calendar &&
              calendar.map((calendrier) => (
                <div key={calendrier.id}>
                  <img
                    // src={calendrier.circuit.name}
                    src="/assets/effet_vitre.jpg"
                    alt=""
                    className="img-size"
                  />
                  <div className="overlay-title">
                    <h3>
                      {calendrier.category}
                      <br />
                      {calendrier.circuit_id}
                    </h3>
                    <p className="overlay-description">
                      {moment(calendrier.date).format("DD/MM/YYYY")}
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

export default Calendrier;

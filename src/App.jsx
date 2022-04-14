import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Infos from "./components/Infos/Infos";
import Calendrier from "./components/Calendrier/Calendrier";
import Circuits from "./components/Circuits/Circuits";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="infos" element={<Infos />}></Route>
        <Route path="calendrier" element={<Calendrier />}></Route>
        <Route path="circuits" element={<Circuits />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

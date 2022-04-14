import React, {useState} from 'react'
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  }

  return (
    <div className="container navbar">
      <div style={{ padding: '2rem 1rem' }} className="navBarHeader">
        <div className="wrapper-navbar">
          <div className="navbar-logo">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? '' : '')}
              onClick={handleClick}
            >
              <img
                src="/assets/logo-moto.png"
                alt="logo moto"
                width={50}
              />
            </NavLink>
          </div>
          <ul className="navbar-menu">
            <li>
              <NavLink to="/infos">Infos</NavLink>
            </li>
            <li>
              <NavLink to="/calendrier">Calendrier</NavLink>
            </li>
            <li>
              <NavLink to="/circuits">Circuits</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          
          <button
            type="button"
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`navbar-wrapper-mobile ${open ? 'open' : ''}`}>
        <ul className={`navbar-mobile ${open ? 'open' : ''}`}>
          <li>
            <NavLink to="/infos" onClick={handleClick}>
              Infos
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendrier" onClick={handleClick}>
              Calendrier
            </NavLink>
          </li>
          <li>
            <NavLink to="/circuits" onClick={handleClick}>
              Circuits
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

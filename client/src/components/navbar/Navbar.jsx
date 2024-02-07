import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="admin-navbar" className={`${menuOpen ? 'open' : ''}`}>
        <div className="nav-wrapper">
          <div className="logo">
            <img width="200px" height="auto" src={Logo} alt="Logo" />
          </div>

          {/* Navigation links */}
          <div id="navLinks" className={`${menuOpen ? 'open' : ''}`}>
            <NavLink to="/#home" className="navlink">
              Home
            </NavLink>
            <NavLink to="/explore-trainers" className="navlink">
              Explore Trainers
            </NavLink>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
          </div>

          {/* Hamburger menu button for mobile on the right side */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
    </>
  );
}
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'; // Importa iconos de GitHub y LinkedIn
import '../assets/css/navbar.css'; // Importa los estilos CSS del Navbar

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Cambia el estado a isDarkMode
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Invierte el estado al hacer clic
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutMe">About Me</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact Me</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="social-icons">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div class="linea-vertical"></div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <FaSun size={24} color="white" /> // Sol con fondo para modo claro
          ) : (
            <FaMoon size={24} color="white" /> // Sol sin fondo para modo oscuro
          )}
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Language</button>
          <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
            <a href="#">Español</a>
            <a href="#">English</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

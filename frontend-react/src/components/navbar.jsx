import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'; // Importa iconos de GitHub y LinkedIn
import '../assets/css/navbar.css'; // Importa los estilos CSS del Navbar
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Cambia el estado a isDarkMode
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const {t, i18n } = useTranslation();


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Invierte el estado al hacer clic
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><a href="/">{t('liNavbar1')}</a></li>
          <li><a href="/aboutMe">{t('liNavbar2')}</a></li>
          <li><a href="/projects">{t('liNavbar3')}</a></li>
          <li><a href="/contact">{t('liNavbar4')}</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="social-icons">
          <a href="https://github.com/ramirolepori/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ramirolepori/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
        <div class="linea-vertical"></div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <FaSun size={24} color="white" /> // Sol para modo claro
          ) : (
            <FaMoon size={24} color="white" /> // Luna para modo oscuro
          )}
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Language</button>
          <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
            <button className="language-button" onClick={() => changeLanguage('es')}>Español</button>
            <button className="language-button" onClick={() => changeLanguage('en')}>English</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

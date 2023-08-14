import React from 'react';
import '../assets/css/main.css';
import backgroundImage from '../images/background.jpeg';

const Index = () => {
  return (
    <section id="index-section" className="section">
      <div className="image-container">
        <img src={backgroundImage} alt="Mountain" />
      </div>
      <div className="presentation">
        <h1>Bienvenido a mi web personal</h1>
        <p>Aquí encontrarás un pequeño resumen de mí, mis certificaciones y mis proyectos.</p>
        <a href="/aboutMe" className="explore-button">Explorar</a>
      </div>
    </section>
  );
};

export default Index;

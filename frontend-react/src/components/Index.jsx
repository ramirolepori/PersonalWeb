import React from 'react';
import { useTranslation } from 'react-i18next';
import imagenPresentation from '../images/personaTrabajando.jpeg'; // Ajusta la ruta de la imagen según tu estructura de archivos
import '../assets/css/main.css';

const Index = () => {
  const { t } = useTranslation();
  return (
    <section id="index-section" className="section">
      <div className="presentation">
        <div className="presentation-content">
          <div className="left-content">
            <h1></h1>
            <h1>
              <span className="colored-text">{t('h1Index1')}</span>
              <span className="second-colored-text">{t('h1Index2')}</span>
            </h1>
            <button className="my-button">full stack developer</button>
          </div>
          <div className="right-content">
            <img src={imagenPresentation} alt="Imagen de presentación" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

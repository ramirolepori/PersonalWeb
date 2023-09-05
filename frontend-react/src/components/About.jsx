import React, { useEffect, useState } from 'react';
import '../assets/css/about.css'; // Ajusta la ruta del archivo CSS según tu estructura de archivos
import { useTranslation } from "react-i18next";
import './i18n'

const About = () => {
  const { t } = useTranslation();
  const [certificates, setCertificates] = useState([]);
  // Definir un objeto con __html para renderizar HTML de manera segura
  const dangerouslyHTML = { __html: t("pAbout6") };

  useEffect(() => {
    // Reemplaza la URL con la ruta de tu servidor Node.js que devuelve los datos JSON
    const apiUrl = "http://localhost:3000/certificates";
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setCertificates(data))
      .catch(error => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <section id="about" className="section">
      <h2>{t("h2About1")}</h2>
      <div className="about-container">
        <div className="text-container">
          <p>{t("pAbout1")}</p>
          <p>{t("pAbout2")}</p>
          <p>{t("pAbout3")}</p>
          <p>{t("pAbout4")}</p>
          <p>{t("pAbout5")}</p>
          <p dangerouslySetInnerHTML={dangerouslyHTML}></p>
          <p>{t("pAbout7")}</p>
        </div>
        <div className="botton-container">

        </div>
      </div>
      <h2>{t("h2Certifications1")}</h2>
      <div className="certifications-container">
        {certificates.map(certificate => (
          <div key={certificate._id} className="certification-item">
            <img src={`http://localhost:3000/images/${certificate.image}`} alt={certificate.name} />
            <p className="project-title">{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

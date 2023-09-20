import React, { useEffect, useState } from 'react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css'; // Importa los estilos de Swiper
import '../assets/css/certifications.css';

// Instala los módulos necesarios de Swiper
SwiperCore.use([EffectCoverflow, Navigation]);

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/certificates";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setCertificates(data))
      .catch(error => console.error("Error al obtener los datos:", error));
  }, []);

    useEffect(() => {
    // Después de cargar los certificados, inicializa Swiper
    const swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <section id="certifications" className="section">
      <h2>My Certifications</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {certificates.map(certificate => (
            <div key={certificate._id} className="swiper-slide">
              <img src={`http://localhost:3000/images/${certificate.image}`} alt={certificate.name} />
              <p className="project-title">{certificate.description}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Certifications;

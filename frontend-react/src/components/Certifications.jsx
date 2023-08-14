import React, { useEffect, useState } from 'react';
import '../assets/css/certifications.css'

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Reemplaza la URL con la ruta de tu servidor Node.js que devuelve los datos JSON
    const apiUrl = "http://localhost:3000/certificates";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setCertificates(data))
      .catch(error => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <section id="certifications" className="section">
      <h2>My Certifications</h2>
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

export default Certifications;

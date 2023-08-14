import React from 'react';
import '../assets/css/contact.css'
import contactImage from '../images/pexels-photo-3206081.webp';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Puedes contactarme a través del formulario a continuación o utilizando los enlaces a mis perfiles en LinkedIn y GitHub.</p>

      <div className="contact-container">
        <form id="contact-form" className="form-container" action="https://formspree.io/f/xgejaldl" method="POST">
          <div className="form-item">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-item">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-item">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-item">
            <input type="submit" value="Enviar" id="submit-btn" />
          </div>
        </form>

        <div className="image-container">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>

      <p>Encuéntrame en:</p>
      <ul>
        <li><a href="https://www.linkedin.com/your-profile-link">LinkedIn</a></li>
        <li><a href="https://github.com/your-github-profile">GitHub</a></li>
      </ul>
    </section>
  );
};

export default Contact;

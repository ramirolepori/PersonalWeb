import React from 'react';
import '../assets/css/contact.css'
import contactImage from '../images/pexels-photo-3206081.webp';
import { useTranslation } from "react-i18next";
import './i18n'

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section">
      <h2>{t("h2Contact1")}</h2>
      <p>{t("pContact1")}</p>

      <div className="contact-container">
        <form id="contact-form" className="form-container" action="https://formspree.io/f/xgejaldl" method="POST">
          <div className="form-item">
            <label htmlFor="name">{t("labelContact1")}</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-item">
            <label htmlFor="email">{t("labelContact2")}</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-item">
            <label htmlFor="message">{t("labelContact3")}</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-item">
            <input type="submit" value={t("buttonContact1")} id="submit-btn" />
          </div>
        </form>

        <div className="image-container">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>

      <p>{t("pContact2")}</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/ramirolepori">LinkedIn</a></li>
        <li><a href="https://github.com/ramirolepori">GitHub</a></li>
      </ul>
    </section>
  );
};

export default Contact;

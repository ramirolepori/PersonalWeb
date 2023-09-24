import React, { useEffect, useState } from 'react';
import '../assets/css/project.css';
import { useTranslation } from "react-i18next";
import './i18n'

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const apiUrlImages = "http://localhost:3000/images/"


  useEffect(() => {
    // Reemplaza la URL con la ruta de tu servidor Node.js que devuelve los datos JSON
    const apiUrl = "http://localhost:3000/projects";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <section id="projects" className="section">
      <h2>{t("h2Projects1")}</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project._id} className="projects-item">
            <div className="project-details">
              <img src={apiUrlImages + project.logo} alt="Logo" className="logo" />
              <div>
                <div className="project-title">{project.name}</div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="button-container">
                <a href={project.url} className="visit-button" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.1696 5C17.273 6.55556 19.1622 8.37278 20.7905 10.4057C20.9302 10.5801 21 10.79 21 11M15.1696 17C17.273 15.4444 19.1622 13.6272 20.7905 11.5943C20.9302 11.4199 21 11.21 21 11M21 11L3 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <img src={apiUrlImages + project.picture} alt={project.name} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

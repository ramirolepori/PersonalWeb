import React, { useEffect, useState } from 'react';
import '../assets/css/project.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

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
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project._id} className="projects-item">
            <img src={`http://localhost:3000/images/${project.picture}`} alt={project.name} />
            <div className="project-title">{project.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

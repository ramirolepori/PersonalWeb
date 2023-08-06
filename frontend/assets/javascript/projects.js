document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");
  
    // Reemplaza la URL con la ruta de tu servidor Node.js que devuelve los datos JSON
    const apiUrl = "http://localhost:3000/projects";
  
    // Obtener los datos JSON del servidor utilizando Fetch API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Iterar sobre los elementos JSON y mostrarlos en el contenedor
        data.forEach((project) => {
          const projectItem = document.createElement("div");
          projectItem.classList.add("projects-item");
  
          const projectImage = document.createElement("img");
          projectImage.src = "http://localhost:3000/images/"+project.picture;
          projectImage.alt = project.name;
  
          const projectTitle = document.createElement("div");
          projectTitle.classList.add("project-title");
          projectTitle.textContent = project.name;
  
          projectItem.appendChild(projectImage);
          projectItem.appendChild(projectTitle);
  
          projectsContainer.appendChild(projectItem);
        });
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  });
  
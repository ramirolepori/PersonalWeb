document.addEventListener("DOMContentLoaded", function () {
    const certificationsContainer = document.querySelector(".certifications-container");
  
    // Reemplaza la URL con la ruta de tu servidor Node.js que devuelve los datos JSON
    const apiUrl = "http://localhost:3000/certificates";
  
    // Obtener los datos JSON del servidor utilizando Fetch API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Iterar sobre los elementos JSON y mostrarlos en el contenedor
        data.forEach((certificates) => {
          const certificateItem = document.createElement("div");
          certificateItem.classList.add("certification-item");
  
          const certificateImage = document.createElement("img");
          certificateImage.src = "http://localhost:3000/images/"+certificates.image;
          certificateImage.alt = certificates.name;
  
          const certificateTitle = document.createElement("p");
          certificateTitle.classList.add("project-title");
          certificateTitle.textContent = certificates.description;
  
          certificateItem.appendChild(certificateImage);
          certificateItem.appendChild(certificateTitle);
  
          certificationsContainer.appendChild(certificateItem);
        });
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  });
  
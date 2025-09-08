# Portfolio de Ramiro Lepori

¡Hola! 👋 Soy Ramiro Lepori, un desarrollador de software apasionado por crear soluciones tecnológicas innovadoras. Este repositorio contiene el código fuente de mi portafolio personal, donde muestro mis proyectos y habilidades.

## Descripción General

Este proyecto es una aplicación web full-stack diseñada para mostrar mi trayectoria profesional, proyectos y certificaciones. Está construida con un frontend moderno en React y un backend robusto en Node.js, demostrando mi capacidad para trabajar con arquitecturas de cliente-servidor.

El objetivo de este portafolio es proporcionar una visión clara y concisa de mis compétences técnicas y mi experiencia a reclutadores y potenciales empleadores.

## Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack MERN, entre otras tecnologías:

*   **Frontend**:
    *   React.js: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
    *   React Router: Para la navegación y el enrutamiento del lado del cliente.
    *   i18next: Para la internacionalización y el soporte multi-idioma.
    *   SASS: Un preprocesador de CSS para un estilo más organizado y mantenible.
*   **Backend**:
    *   Node.js: Un entorno de ejecución de JavaScript del lado del servidor.
    *   Express.js: Un framework minimalista para construir APIs RESTful.
    *   MongoDB: Una base de datos NoSQL para almacenar los datos de los proyectos y certificaciones.
    *   Mongoose: Una biblioteca de modelado de datos de objetos (ODM) para MongoDB y Node.js.
*   **Herramientas y Despliegue**:
    *   Git y GitHub: Para el control de versiones y la colaboración.
    *   (Opcional: puedes añadir aquí donde lo tienes desplegado, ej: Vercel, Netlify, Heroku)

## Cómo Empezar

**Nota:** La carpeta `frontend/` ha sido eliminada y reemplazada por la aplicación de React en `frontend-react/`.

Para ejecutar este proyecto localmente, sigue estos pasos:

### Prerrequisitos

Asegúrate de tener Node.js y npm instalados en tu máquina.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/ramirolepori/app.git
    cd app
    ```

2.  **Instala las dependencias del backend:**
    ```bash
    npm install
    ```

3.  **Instala las dependencias del frontend:**
    ```bash
    cd frontend-react
    npm install
    ```

### Configuración del Entorno

1.  **Crea un archivo `.env` en el directorio `backend`:**
    Copia el contenido de `backend/.env.example` y pégalo en un nuevo archivo llamado `backend/.env`.

2.  **Configura la variable de entorno:**
    Reemplaza los valores en el archivo `.env` con tu propia cadena de conexión de MongoDB.
    ```
    DB_URL=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    ```

### Ejecución

1.  **Inicia el servidor de backend:**
    Desde el directorio raíz, ejecuta:
    ```bash
    node backend/server.js
    ```
    El servidor se iniciará en `http://localhost:3000`.

2.  **Inicia la aplicación de frontend:**
    En una nueva terminal, desde el directorio `frontend-react`, ejecuta:
    ```bash
    npm start
    ```
    La aplicación se abrirá en `http://localhost:3001`.

## Contacto

¡Gracias por visitar mi portafolio! Si tienes alguna pregunta o estás interesado en colaborar, no dudes en contactarme.

*   **LinkedIn**: [Tu Perfil de LinkedIn](https://www.linkedin.com/in/ramirolepori)
*   **GitHub**: [@ramirolepori](https://github.com/ramirolepori)

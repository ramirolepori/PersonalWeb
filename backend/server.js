const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const dbp = require('./src/lib/DBproj.js');
const dbc = require('./src/lib/DBcert.js');

// Middleware para servir archivos estáticos
app.use('/images', express.static(path.join(__dirname, 'src/images')));

// Configurar CORS para permitir solicitudes desde 'http://127.0.0.1:5500'
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Parsear el cuerpo de las solicitudes con el formato de formulario (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Ruta para obtener los proyectos desde la base de datos
app.get('/projects', async (req, res) => {
  try {
    const projects = await dbp.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
});

// Ruta para obtener los certificados desde la base de datos
app.get('/certificates', async (req, res) => {
  try {
    const certificates = await dbc.getCertificates();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los certificados' });
  }
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

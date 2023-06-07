const express = require('express');
const app = express();
const port = 3000;
const db = require('./src/lib/DBprov.js');

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Ruta para obtener los proyectos desde la base de datos
app.get('/projects', async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

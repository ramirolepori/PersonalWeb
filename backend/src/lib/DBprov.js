// DBprov.js

const mongoose = require('mongoose');

// Configuración de la conexión a la base de datos
const dbUrl = 'mongodb+srv://ramirolepori:FLqSiz7UVwIeX2NP@myweb.gzp1hef.mongodb.net/myWeb?retryWrites=true&w=majority'; // URL de conexión de MongoDB Atlas

// Conexión a la base de datos
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definir el esquema de tu colección
const projectSchema = new mongoose.Schema({
  _id: String,
  name: String,
  picture: String,
  description: String,
  url: String,
  date: { type: Date, default: Date.now }
});

// Definir el modelo basado en el esquema
const Project = mongoose.model('Project', projectSchema);

// Función para obtener todos los proyectos
async function getProjects() {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error;
  }
}

// Exportar la instancia de conexión y la función getProjects para poder utilizarlas en otros archivos
module.exports = {
  connection: mongoose.connection,
  getProjects
};

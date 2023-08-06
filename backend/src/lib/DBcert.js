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

// Definir el esquema de la colección "certificates"
const certificateSchema = new mongoose.Schema({
  _id: String,
  name: String,
  image: String,
  description: String,
});

// Definir el modelo basado en el esquema
const Certificate = mongoose.model('Certificate', certificateSchema);

// Función para obtener todos los certificados
async function getCertificates() {
  try {
    const certificates = await Certificate.find();
    return certificates;
  } catch (error) {
    console.error('Error al obtener los certificados:', error);
    throw error;
  }
}

// Exportar la instancia de conexión y la función getCertificates para poder utilizarlas en otros archivos
module.exports = {
  connection: mongoose.connection,
  getCertificates
};

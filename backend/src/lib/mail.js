const nodemailer = require('nodemailer');

// Configurar el transporte de nodemailer (verifica la documentación para las opciones adecuadas)
const transporter = nodemailer.createTransport({
  // Configura aquí el servicio de correo que desees utilizar
  service: 'Gmail',
  auth: {
    user: 'ramiroleporitech@gmail.com', // Cambia esto con tu dirección de correo
    pass: 'Contraregular321' // Cambia esto con tu contraseña de correo
  }
});

// Función para enviar el correo electrónico
async function sendEmail(name, email, message) {
  // Construir el mensaje de correo
  const mailOptions = {
    from: 'ramiroleporitech@gmail.com', // Cambia esto con tu dirección de correo
    to: 'leporiramiro@gmail.com', // Cambia esto con la dirección de destino
    subject: 'Formulario de contacto',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`
  };

  // Enviar el correo electrónico
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
}

module.exports = {
  sendEmail
};

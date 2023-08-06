document.addEventListener('DOMContentLoaded', () => {

  const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', async () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Enviar el formulario de contacto al servidor
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
  
      if (response.ok) {
        alert('Mensaje enviado correctamente.');
        // Puedes redirigir a otra página después de enviar el mensaje si lo deseas
        // window.location.href = '/gracias.html';
      } else {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    });
  });
  
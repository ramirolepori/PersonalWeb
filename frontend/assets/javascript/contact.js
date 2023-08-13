document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Aquí puedes agregar tus validaciones si lo deseas

      // Enviar formulario a través de Formspr.ee
      form.submit();

      // Borrar los campos después de enviar
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
  });
});

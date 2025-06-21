const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Limpiar mensajes de error anteriores
  document.getElementById("error-nombre").innerText = "";
  document.getElementById("error-email").innerText = "";
  document.getElementById("error-edad").innerText = "";

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = document.getElementById("edad").value.trim();

  let hayErrores = false;

  // Validar nombre
  if (nombre === "") {
    document.getElementById("error-nombre").innerText =
      "Por favor, ingresa tu nombre.";
    hayErrores = true;
  }

  // Validar email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("error-email").innerText =
      "Por favor, ingresa tu email.";
    hayErrores = true;
  } else if (!regexEmail.test(email)) {
    document.getElementById("error-email").innerText =
      "Formato de email no válido.";
    hayErrores = true;
  }

  // Validar edad
  if (edad === "") {
    document.getElementById("error-edad").innerText =
      "Por favor, ingresa tu edad.";
    hayErrores = true;
  } else if (isNaN(edad) || parseInt(edad) <= 18) {
    document.getElementById("error-edad").innerText =
      "Debes ser mayor de 18 años.";
    hayErrores = true;
  }

  // Si todo está bien
  if (!hayErrores) {
    alert("Formulario enviado correctamente.");
    formulario.reset();
  }
});

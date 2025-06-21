document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-tarea");
  const listaTareas = document.getElementById("lista-tareas");
  const inputTarea = document.getElementById("nueva-tarea");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = inputTarea.value.trim();

    if (texto !== "") {
      const nuevoLi = document.createElement("li");
      nuevoLi.textContent = texto;

      // Alternar clase al hacer clic
      nuevoLi.addEventListener("click", function () {
        nuevoLi.classList.toggle("completado");
      });

      listaTareas.appendChild(nuevoLi);
      inputTarea.value = "";
    }
  });
});

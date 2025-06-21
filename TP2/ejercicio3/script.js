document.addEventListener("DOMContentLoaded", () => {
  const botonResaltar = document.getElementById("resaltarBtn");
  const botonOcultar = document.getElementById("ocultarBtn");

  botonResaltar.addEventListener("click", () => {
    document.querySelectorAll(".parrafo").forEach(parrafo => {
      parrafo.classList.toggle("resaltado");
    });
  });

  botonOcultar.addEventListener("click", () => {
    document.querySelectorAll(".parrafo").forEach(parrafo => {
      parrafo.classList.toggle("oculto");
    });
  });
});

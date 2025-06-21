// -- Selecciona el titulo y cambia su texto
const titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Título Modificado con JavaScript";

// -- Selecciona los párrafos y cambiar su color
const parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "blue";
}

// -- Selecciona todos los listados y agregar texto extra
const items = document.querySelectorAll("#contenedor ul li");
for (let i = 0; i < items.length; i++) {
  items[i].textContent += ` (Item ${i + 1} modificado)`;
}

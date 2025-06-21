const Boton = document.getElementById("Boton");
Boton.addEventListener("click", function () {
  const input = document.querySelector("input");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.querySelector("ul").appendChild(li);
  input.value = "";
  const BotonEliminar = document.createElement("button");
  BotonEliminar.textContent = "Eliminar";
  li.appendChild(BotonEliminar);
  BotonEliminar.addEventListener("click", function () {
    li.remove();
  });
});

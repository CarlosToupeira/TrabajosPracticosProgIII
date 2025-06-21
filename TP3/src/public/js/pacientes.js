async function cargarPacientes() {
  const contenedor = document.querySelector(".pacientes");
  contenedor.innerHTML = ""; // Limpiar antes de renderizar

  try {
    const response = await fetch("http://localhost:3001/api/v1/pacientes/");
    const pacientes = await response.json();

    if (!Array.isArray(pacientes) || pacientes.length === 0) {
      contenedor.innerHTML = "<p>No hay pacientes registrados.</p>";
      return;
    }

    const lista = document.createElement("ul");

    pacientes.forEach((paciente) => {
      const li = document.createElement("li");
      const nombre = paciente.name || paciente.email;
      li.innerHTML = `ID: ${paciente.id} - Nombre: ${nombre} `;

      // Botón Editar
      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.onclick = () => {
        window.location.href = `http://localhost:3001/pacientes/update/${paciente.id}`;
      };

      // Botón Eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.className = "delete";
      btnEliminar.textContent = "Eliminar";
      btnEliminar.onclick = async () => {
        if (confirm(`¿Eliminar al paciente ${nombre}?`)) {
          try {
            const deleteResp = await fetch(
              `http://localhost:3001/api/v1/pacientes/${paciente.id}`,
              {
                method: "DELETE",
              }
            );

            if (deleteResp.ok) {
              li.remove(); // Eliminar de la lista visualmente
            } else {
              const data = await deleteResp.json();
              alert(
                `Error al eliminar: ${data.mensaje || "Error desconocido"}`
              );
            }
          } catch (err) {
            console.error(err);
            alert("Error al conectar con el servidor");
          }
        }
      };

      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });

    contenedor.appendChild(lista);
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    contenedor.innerHTML = "<p>Error al cargar pacientes.</p>";
  }
}

window.addEventListener("DOMContentLoaded", cargarPacientes);

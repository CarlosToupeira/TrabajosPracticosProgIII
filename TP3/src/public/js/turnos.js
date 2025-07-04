document
  .getElementById("formBuscarTurnos")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const pacienteId = document.getElementById("pacienteId").value;
    const url = `http://localhost:3001/api/v1/turnos/${pacienteId}`;
    const resultadoDiv = document.getElementById("resultado");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const turnos = await response.json();

      if (turnos.length === 0) {
        resultadoDiv.innerHTML =
          "<p>No se encontraron turnos para este paciente.</p>";
        return;
      }

      resultadoDiv.innerHTML = "<h2>Turnos:</h2>";
      const lista = document.createElement("ul");

      turnos.forEach((turno) => {
        const li = document.createElement("li");
        li.innerHTML = `Fecha: ${turno.fecha}, Estado: ${turno.estado} `;

        // Botón Eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = async () => {
          if (confirm("¿Eliminar este turno?")) {
            try {
              const deleteResp = await fetch(
                `http://localhost:3001/api/v1/turnos/${turno.id}`,
                {
                  method: "DELETE",
                }
              );

              if (deleteResp.ok) {
                li.remove(); // Quitar de la lista
              } else {
                const data = await deleteResp.json();
                alert(
                  `Error al eliminar: ${data.mensaje || "Error desconocido"}`
                );
              }
            } catch (err) {
              alert("Error al conectar con el servidor");
              console.error(err);
            }
          }
        };

        // Botón Editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = () => {
          window.location.href = `http://localhost:3001/turnos/update/${turno.id}`;
        };

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
      });

      resultadoDiv.appendChild(lista);
    } catch (error) {
      resultadoDiv.innerHTML = `<p>Error al buscar turnos: ${error.message}</p>`;
    }
  });

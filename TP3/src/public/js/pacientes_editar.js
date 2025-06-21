// Obtener el ID desde la URL actual
function obtenerIdDesdeURL() {
  const partes = window.location.pathname.split("/");
  return partes[partes.length - 1]; // último segmento de la URL
}

async function cargarPaciente() {
  const pacienteId = obtenerIdDesdeURL();
  const mensaje = document.getElementById("mensaje");

  try {
    const response = await fetch("http://localhost:3001/api/v1/pacientes/");
    const pacientes = await response.json();

    const paciente = pacientes.find((p) => p.id == pacienteId);

    if (!paciente) {
      mensaje.textContent = "Paciente no encontrado.";
      return;
    }

    // Rellenar los campos
    document.getElementById("email").value = paciente.email || "";
    document.getElementById("name").value = paciente.name || "";
  } catch (error) {
    console.error("Error al cargar paciente:", error);
    mensaje.textContent = "Error al cargar los datos del paciente.";
  }
}

// Al enviar el formulario
document
  .getElementById("formPaciente")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const pacienteId = obtenerIdDesdeURL();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const mensaje = document.getElementById("mensaje");

    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/pacientes/${pacienteId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        mensaje.textContent = "Paciente actualizado correctamente.";
      } else {
        mensaje.textContent =
          "Error: " + (result.mensaje || "No se pudo actualizar");
      }
    } catch (error) {
      console.error("Error al actualizar paciente:", error);
      mensaje.textContent = "Error al conectar con el servidor.";
    }
  });

window.addEventListener("DOMContentLoaded", cargarPaciente);

// Cargar pacientes al iniciar
window.addEventListener("DOMContentLoaded", async () => {
  const select = document.getElementById("selectPaciente");

  try {
    const response = await fetch("http://localhost:3001/api/v1/pacientes/");
    const pacientes = await response.json();

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.id;
      option.textContent = paciente.name || paciente.email;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error al cargar pacientes:", error);
    select.innerHTML = "<option disabled>Error al cargar pacientes</option>";
  }
});

// Enviar datos del turno al backend
document.getElementById("formTurno").addEventListener("submit", async (e) => {
  e.preventDefault();

  const pacienteId = document.getElementById("selectPaciente").value;
  const fecha = document.getElementById("fecha").value;
  const estado = document.getElementById("estado").value;

  const turno = { pacienteId, fecha, estado };

  try {
    const response = await fetch("http://localhost:3001/api/v1/turnos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById("mensaje").textContent =
        "Turno registrado con éxito.";
    } else {
      document.getElementById("mensaje").textContent =
        "Error: " + (result.mensaje || "No se pudo registrar");
    }
  } catch (error) {
    document.getElementById("mensaje").textContent =
      "Error al conectar con el servidor.";
    console.error(error);
  }
});

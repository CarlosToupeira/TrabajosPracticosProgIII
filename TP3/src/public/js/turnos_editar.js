const selectPaciente = document.getElementById("selectPaciente");
const inputFecha = document.getElementById("fecha");
const selectEstado = document.getElementById("estado");
const form = document.getElementById("formTurno");
const mensaje = document.getElementById("mensaje");

async function cargarPacientes() {
  try {
    const res = await fetch("http://localhost:3001/api/v1/pacientes/");
    const pacientes = await res.json();
    pacientes.forEach((p) => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.name || p.email;
      selectPaciente.appendChild(option);
    });
  } catch (err) {
    console.error("Error al cargar pacientes:", err);
  }
}

async function cargarTurno() {
  const mensaje = document.getElementById("mensaje");

  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/turnos/${turnoId}`
    );
    const turno = await response.json();

    if (!turno) {
      mensaje.textContent = "Turno no encontrado.";
      return;
    }

    // Convertir fecha ISO a yyyy-MM-dd
    const formatearFecha = (fechaISO) => {
      const date = new Date(fechaISO);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    document.getElementById("fecha").value = formatearFecha(turno.fecha);
    document.getElementById("estado").value = turno.estado;

    // Y si necesitás cargar el select de paciente también:
    const select = document.getElementById("selectPaciente");
    const pacientesResponse = await fetch(
      "http://localhost:3001/api/v1/pacientes"
    );
    const pacientes = await pacientesResponse.json();
    pacientes.forEach((p) => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.name;
      if (p.id === turno.pacienteId) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error al cargar turno:", error);
    mensaje.textContent = "Error al cargar los datos del turno.";
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    fecha: inputFecha.value,
    estado: selectEstado.value,
    pacienteId: selectPaciente.value,
  };

  try {
    const res = await fetch(`http://localhost:3001/api/v1/turnos/${turnoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (res.ok) {
      mensaje.textContent = "Turno actualizado correctamente.";
    } else {
      const error = await res.json();
      mensaje.textContent =
        "Error: " + (error.mensaje || "No se pudo actualizar");
    }
  } catch (err) {
    console.error("Error al actualizar turno:", err);
    mensaje.textContent = "Error al conectar con el servidor";
  }
});

// Cargar todo al iniciar
window.addEventListener("DOMContentLoaded", async () => {
  await cargarPacientes();
  await cargarTurno();
});

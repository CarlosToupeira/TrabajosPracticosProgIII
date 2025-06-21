document
  .getElementById("formPaciente")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
      const response = await fetch("/api/v1/pacientes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        document.getElementById("mensaje").innerText =
          "Paciente registrado correctamente.";
      } else {
        document.getElementById("mensaje").innerText = `Error: ${
          data.mensaje || "No se pudo registrar"
        }`;
      }
    } catch (error) {
      document.getElementById(
        "mensaje"
      ).innerText = `Error al conectar con el servidor: ${error.message}`;
    }
  });

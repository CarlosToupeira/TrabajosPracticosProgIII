const {
  getPacientesModel,
  getPacientePorId,
  createPaciente,
  updatePaciente,
  deletePaciente,
} = require("../../models/sqlite/paciente.model.js");

class PacienteController {
  async obtenerPacientes(req, res) {
    try {
      const pacientes = await getPacientesModel();
      res.json(pacientes);
    } catch (e) {
      res
        .status(500)
        .json({ mensaje: "Error al obtener los pacientes:", error: e });
    }
  }

  async obtenerPacientePorId(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const paciente = await getPacientePorId(id);

      if (!paciente) {
        return res.status(404).json({ mensaje: "Paciente no encontrado" });
      }

      res.json(paciente);
    } catch (e) {
      res
        .status(500)
        .json({ mensaje: "Error al obtener paciente por ID:", error: e });
    }
  }

  async crearPaciente(req, res) {
    console.log(req.body)

    try {
      const paciente = await createPaciente(req.body);
      res.status(201).json(paciente);
    } catch (e) {
      res.status(500).json({ mensaje: "Error al crear paciente:", error: e });
    }
  }

  async actualizarPaciente(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const updatedRows = await updatePaciente(id, req.body);

      if (updatedRows === 0) {
        return res.status(404).json({ mensaje: "Paciente no encontrado" });
      }

      res.json({ mensaje: "Paciente actualizado" });
    } catch (e) {
      console.error("Error al actualizar paciente:", error);
      res
        .status(500)
        .json({ mensaje: "Error al actualizar paciente:", error: e });
    }
  }

  async borrarPaciente(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const pacienteEliminado = await deletePaciente(id);

      if (pacienteEliminado === 0) {
        return res.status(404).json({ mensaje: "Paciente no encontrado" });
      }

      res.json({ mensaje: "Paciente borrado con éxito", idEliminado: id });
    } catch (e) {
      res.status(500).json({ mensaje: "Error al borrar paciente:", error: e });
    }
  }
}

module.exports = new PacienteController();

const {
  getTurnosPaciente,
  getTurnoPorId,
  createTurno,
  updateTurno,
  deleteTurno,
} = require("../../models/sqlite/turno.model");

class TurnoController {
  async obtenerTurnos(req, res) {
    try {
      const { pacienteId } = req.params;

      if (!pacienteId) {
        return res.status(400).json({ mensaje: "Ingresa un ID valido" });
      }

      const turnos = await getTurnosPaciente(pacienteId);

      if (turnos.length === 0) {
        return res.status(404).json({ mensaje: "El paciente no tiene turnos" });
      }

      res.json(turnos);
    } catch (e) {
      res.status(500).json({
        mensaje: "No se pudieron obtener los turnos",
        error: e,
      });
    }
  }

  async obtenerTurnoPorId(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const turno = await getTurnoPorId(id);

      if (!turno) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }

      res.json(turno);
    } catch (e) {
      res
        .status(500)
        .json({ mensaje: "Error al obtener turno por ID:", error: e });
    }
  }

  async crearTurno(req, res) {
    try {
      const turno = await createTurno(req.body);
      res.status(201).json(turno);
    } catch (e) {
      res.status(500).json({ mensaje: "Error al crear turno:", error: e });
    }
  }

  async actualizarTurno(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const updatedRows = await updateTurno(id, req.body);

      if (updatedRows === 0) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }

      res.json({ mensaje: "Turno actualizado" });
    } catch (e) {
      console.error("Error al actualizar turno:", error);
      res.status(500).json({ mensaje: "Error al actualizar turno:", error: e });
    }
  }

  async borrarTurno(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ mensaje: "Ingrese un ID valido" });
      }

      const turnoEliminado = await deleteTurno(id);

      if (turnoEliminado === 0) {
        return res.status(404).json({ mensaje: "Turno no encontrado" });
      }

      res.json({ mensaje: "Turno borrado con éxito", idEliminado: id });
    } catch (e) {
      res.status(500).json({ mensaje: "Error al borrar Turno:", error: e });
    }
  }
}

module.exports = new TurnoController();

const { Router } = require("express");
const turnosController = require("../controllers/API/turnos.controller.js");
const rutaTurnos = Router();


rutaTurnos.get("/:pacienteId", turnosController.obtenerTurnos);
rutaTurnos.get("/:id", turnosController.obtenerTurnoPorId);



rutaTurnos.post("/", turnosController.crearTurno);
rutaTurnos.put("/:id", turnosController.actualizarTurno);
rutaTurnos.delete("/:id", turnosController.borrarTurno);

module.exports = rutaTurnos;

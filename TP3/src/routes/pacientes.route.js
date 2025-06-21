const { Router } = require("express");
const pacientesController = require("../controllers/API/pacientes.controller.js");
const rutaPacientes = Router();


rutaPacientes.get("/", pacientesController.obtenerPacientes);
rutaPacientes.get("/:id", pacientesController.obtenerPacientePorId);


rutaPacientes.post("/", pacientesController.crearPaciente);
rutaPacientes.put("/:id", pacientesController.actualizarPaciente);
rutaPacientes.delete("/:id", pacientesController.borrarPaciente);

module.exports = rutaPacientes;

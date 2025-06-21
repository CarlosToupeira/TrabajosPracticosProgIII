const { Router } = require("express");
const {
  home,
  turnos,
  registrarPaciente,
  verPaciente,
  actualizarPaciente,
  registrarTurno,
  actualizarTurnos,
} = require("../controllers/home/home.controller.js");
const rutaHome = Router();

rutaHome.get("/", home);

// -- PACIENTES
// -- ver paciente
rutaHome.get("/pacientes", verPaciente);
// -- registrar paciente
rutaHome.get("/pacientes/register", registrarPaciente);

// -- editar pacientes
rutaHome.get("/pacientes/update/:id", actualizarPaciente);

// -- TURNOS

// -- ver turnos por paciente
rutaHome.get("/turnos", turnos);

// -- registrar turno
rutaHome.get("/turnos/new", registrarTurno);

// -- actualizar turnos
rutaHome.get("/turnos/update/:id", actualizarTurnos)

//Otras rutas CRUD

module.exports = rutaHome;

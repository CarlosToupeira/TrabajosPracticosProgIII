const { Router } = require("express");
const {
  home,
  turnos,
  registrarPaciente,
  verPaciente,
  registrarTurno,
  actualizarTurnos,
} = require("../controllers/home/home.controller.js");
const rutaHome = Router();

rutaHome.get("/", home);

// -- PACIENTES
// -- registrar paciente
rutaHome.get("/turnos/register", registrarPaciente);
rutaHome.get("/pacientes", verPaciente);

// -- TURNOS

// -- ver turnos por paciente
rutaHome.get("/turnos", turnos);

// -- registrar turno
rutaHome.get("/turnos/new", registrarTurno);

// -- actualizar turnos
rutaHome.get("/turnos/update/:id", actualizarTurnos)

//Otras rutas CRUD

module.exports = rutaHome;

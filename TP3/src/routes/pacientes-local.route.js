const { Router } = require("express");
const {
  vistaPacientes,
  vistaPacientesPorId,
  crearPaciente,
} = require("../controllers/home/pacientes-local.controller.js");

const router = Router();

router.get("/", vistaPacientes);
router.get("/id", vistaPacientesPorId);
router.post("/nuevo", crearPaciente);

module.exports = router;

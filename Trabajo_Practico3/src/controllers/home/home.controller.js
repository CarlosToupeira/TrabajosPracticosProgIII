// controladores

// -- index.ejs
const home = async (req, res) => {
  res.render("index");
};

// -- pacientes.ver.ejs
const verPaciente = async (req, res) => {
  res.render("pacientes_ver");
};

// -- registrar.ejs
const registrarPaciente = async (req, res) => {
  res.render("pacientes_registrar");
};

// -- VER TURNOS
const turnos = async (req, res) => {
  res.render("turnos_ver");
};

// -- REGISTRAR TURNOS
const registrarTurno = async (req, res) => {
  res.render("turnos_nuevo");
};

// -- ACTUALIZAR TURNOS
const actualizarTurnos = async (req, res) => {
  res.render("turnos_editar", { id: req.params.id });
};

module.exports = {
  home,
  turnos,
  registrarPaciente,
  verPaciente,
  registrarTurno,
  actualizarTurnos,
};

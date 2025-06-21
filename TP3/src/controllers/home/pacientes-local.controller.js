const {
  getPacientesModel,
  createPaciente,
  getPacienteById,
} = require("../../models/sqlite/paciente.model");

const vistaPacientes = async (req, res) => {
  try {
    const pacientes = await getPacientesModel();
    res.render("paciente", { pacientes });
  } catch (error) {
    res.status(500).send("Error al obtener pacientes");
  }
};

const vistaPacientesPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await getPacienteById(id);
    res.render("paciente", { paciente });
  } catch (error) {
    res.status(500).send("Error al obtener paciente");
  }
};

const crearPaciente = async (req, res) => {
  try {
    const { name, email } = req.body;
    await createPaciente({ name, email });
    res.redirect("/pacientes");
  } catch (error) {
    console.error("Error al crear paciente:", error);
    res.status(500).send("Error al crear paciente");
  }
};

module.exports = {
  vistaPacientes,
  vistaPacientesPorId,
  crearPaciente,
};

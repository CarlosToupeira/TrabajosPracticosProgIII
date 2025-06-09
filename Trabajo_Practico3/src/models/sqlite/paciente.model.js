const { Paciente } = require("../sqlite/entities/paciente.entity.js");

async function getPacientesModel() {
  try {
    const users = await Paciente.findAll();
    return users;
  } catch (error) {
    console.error("Error al mostrar los pacientes:", error);
  }
}
//TODO: agregar operaciones CRUD

async function getPacienteById(id) {
  const paciente = await Paciente.findByPk(id);
  if (paciente) {
    console.log("Usuario encontrado:", paciente.toJSON());
  } else {
    console.log("Usuario no encontrado");
  }
}

async function createPaciente(data) {
  try {
    const nuevo = await Paciente.create({
      name: data.name,
      email: data.email,
    });
    return nuevo;
  } catch (error) {
    console.error("Error al crear paciente:", error);
    throw error;
  }
}

async function updatePaciente(id, data) {
  try {
    const [updatedRows] = await Paciente.update(data, {
      where: { id },
    });

    return updatedRows;
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    throw error;
  }
}
async function deletePaciente(id) {
  const deleted = await Paciente.destroy({
    where: { id },
  });
  console.log(`${deleted} paciente eliminado`);
}

module.exports = {
  getPacientesModel,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
};

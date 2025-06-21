const { Turno } = require("../sqlite/entities/turno.entity.js");

async function getTurnosPaciente(idPaciente) {
  try {
    return await Turno.findAll({
      where: { pacienteId: idPaciente },
    });
  } catch (error) {
    throw error;
  }
}

async function getTurnoById(id) {
  try {
    return await Turno.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function createTurno(data) {
  try {
    return await Turno.create({
      fecha: data.fecha,
      estado: data.estado,
      pacienteId: data.pacienteId,
    });
  } catch (error) {
    throw error;
  }
}

async function updateTurno(id, data) {
  try {
    const [updatedRows] = await Turno.update(data, {
      where: { id },
    });
    return updatedRows;
  } catch (error) {
    throw error;
  }
}

async function deleteTurno(id) {
  try {
    const turnoEliminado = await Turno.destroy({
      where: { id },
    });
    return turnoEliminado;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getTurnosPaciente,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno,
};

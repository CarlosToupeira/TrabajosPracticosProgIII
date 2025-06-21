const { Paciente } = require("../entities/paciente.entity");
const { Turno } = require("../entities/turno.entity");

function initModels() {
  Paciente.hasMany(Turno, { foreignKey: "pacienteId" });
  Turno.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" });
}

module.exports = initModels;

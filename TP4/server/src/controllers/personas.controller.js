const personasModel = require("../models/personas.models.js");

async function list(req, res) {
  try {
    const personas = await personasModel.getAllPersonas();
    res.status(200).json(personas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las personas" });
  }
}

module.exports = { list };

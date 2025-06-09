const Server = require("./server.js");
const { connectDB } = require("./models/sqlite/config/db.js");
const asociarModelos = require("./models/sqlite/config/asociaciones");

asociarModelos();

connectDB();
console.log("🔧 Iniciando index.js...");

const server = new Server("ejs");
server.listen();

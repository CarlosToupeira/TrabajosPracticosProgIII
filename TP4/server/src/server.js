const express = require("express");
const dotenv = require("dotenv");
const rutaPersonas = require("./routes/personas.route.js");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Rutas
app.use("/personas", rutaPersonas);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server on Port ${port} ........[ok]`);
});

import { PersonaController } from "../controller/personaController.js";
import express from "express";
import cors from "cors"; // <--- AGREGADO

export class PersonaRoutes {
  static instancia = null;

  constructor(controller) {
    if (PersonaRoutes.instancia) {
      return PersonaRoutes.instancia;
    }

    PersonaRoutes.instancia = this;

    if (controller instanceof PersonaController) this.controller = controller;
    else
      throw new Error(
        "tiene que ser una instancia de la clase PersonaController"
      );

    this.app = express();
    this.port = 3000;

    // <-- CORS CONFIGURADO
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    this.app.use(express.json()); // <- también recomendable si usás JSON
  }

  configurarRutas() {
    this.app.get("/personas", (req, res) => {
      const personas = this.controller.getAllPersonas();
      res.json(personas);
    });
  }

  iniciarServidor() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.port}`);
    });
  }
}

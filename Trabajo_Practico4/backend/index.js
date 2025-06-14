import { PersonaController } from "./controller/personaController.js";
import { Persona } from "./models/personaModel.js";
import { PersonaRoutes } from "./routes/personaRoutes.js";

const ruta = new PersonaRoutes(new PersonaController());

ruta.controller.agregarPersona(
  new Persona(
    0,
    "Pepe",
    "López",
    20,
    "pepe@mail.com",
    "https://i.pinimg.com/236x/d7/7e/31/d77e31b4f7c02493d585c8fb34f6d956.jpg"
  )
);
ruta.controller.agregarPersona(
  new Persona(
    1,
    "Ana",
    "García",
    30,
    "ana@mail.com",
    "https://i.pinimg.com/originals/f4/a6/14/f4a614740649d8c495ddc7a55a2cf0d9.jpg"
  )
);
ruta.controller.agregarPersona(
  new Persona(
    2,
    "Luis",
    "Martínez",
    25,
    "luis@mail.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSmhZSUOTxYkcf6PxSQOylQzKKn1rvHWSpQ&s"
  )
);
ruta.controller.agregarPersona(
  new Persona(
    3,
    "Laura",
    "Fernández",
    27,
    "laura@mail.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qS28PAcRSXtLm0IBkLWKgO1W7bJ3pp18IA&s"
  )
);
ruta.controller.agregarPersona(
  new Persona(
    4,
    "Carlos",
    "Ramírez",
    32,
    "carlos@mail.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzld4akHdEZC19qpU3rC6CRLwTAAZoIk2GQ&s"
  )
);

ruta.configurarRutas();
ruta.iniciarServidor();

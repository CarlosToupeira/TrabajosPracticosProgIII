import { Persona } from "../models/personaModel.js";

export class PersonaController
{

    static counter = 0;
    static instancia = null;

    constructor()
    {
        if(PersonaController.instancia)
        {
            return PersonaController.instancia;
        }

        PersonaController.instancia = this;

        this.personas = [];
    }

    agregarPersona(persona)
    {
        if (!(persona instanceof Persona))
        {
            throw new Error("debe ser una instancia de la clase persona");
            return;
        }

        this.personas[PersonaController.counter] = persona;
        PersonaController.counter++;
    }

    getPersona(id)
    {
        return this.personas(id); 
    }

    getAllPersonas()
    {
        return this.personas;
    }

}
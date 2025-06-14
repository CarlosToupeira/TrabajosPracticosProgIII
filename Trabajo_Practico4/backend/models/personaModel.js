export class Persona {
  constructor(id, nombre, apellido, edad, email, foto) {
    if (Number.isInteger(id)) this.id = id;
    else throw new Error("El ID debe ser un número entero.");

    if (typeof nombre === "string" && nombre.trim() !== "")
      this.nombre = nombre;
    else throw new Error("El nombre debe ser un texto no vacío.");

    if (typeof apellido === "string" && apellido.trim() !== "")
      this.apellido = apellido;
    else throw new Error("El apellido debe ser un texto no vacío.");

    if (Number.isInteger(edad) && edad > 0) this.edad = edad;
    else throw new Error("La edad debe ser un número entero positivo.");

    if (typeof email === "string" && email.trim() !== "") this.email = email;
    else throw new Error("El email no es válido.");

    if (typeof foto === "string" && foto.trim() !== "") this.foto = foto;
    else throw new Error("La foto debe ser una URL válida.");
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

  getEdad() {
    return this.edad;
  }

  getEmail() {
    return this.email;
  }

  getFoto() {
    return this.foto;
  }
}

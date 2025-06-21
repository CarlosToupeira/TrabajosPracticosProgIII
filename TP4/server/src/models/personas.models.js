let personas = [
  {
    id: 1,
    nombre: "Lionel",
    apellido: "Messi",
    edad: 36,
    email: "leo.messi@futbol.com",
    foto: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 28,
    email: "ada.lovelace@tech.org",
    foto: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    nombre: "Diego",
    apellido: "Maradona",
    edad: 60,
    email: "d10s@napoli.ar",
    foto: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    nombre: "Rosalía",
    apellido: "Vila",
    edad: 30,
    email: "rosalia.motomami@music.es",
    foto: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    nombre: "Stephen",
    apellido: "Hawking",
    edad: 76,
    email: "s.hawking@universe.uk",
    foto: "https://i.pravatar.cc/150?img=5"
  },
];

// Obtener todas las personas
const getAllPersonas = () => personas;

module.exports = {
  getAllPersonas,
};

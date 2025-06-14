import axios from "./Axios";

// -- OBTENER LISTA DE PERSONAS
export const getLista = () => axios.get(`/personas`);
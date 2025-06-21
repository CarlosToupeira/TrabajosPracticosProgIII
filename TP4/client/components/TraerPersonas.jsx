import { useState, useEffect } from "react";
import { getLista } from "../api/Gets";

import ListaTarjetas from "./ListaTarjetas";

function TraerPersonas() {
  const [loading, setLoading] = useState(true); // -- Estado de Carga
  const [list, setList] = useState([]); // -- Listado

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await getLista();
        setList(response.data);
      } catch (error) {
        console.error("Error al obtener la lista:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAsync();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <ListaTarjetas listado={list} />;
}

export default TraerPersonas;
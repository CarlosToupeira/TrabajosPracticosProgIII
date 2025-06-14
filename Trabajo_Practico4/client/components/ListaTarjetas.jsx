import React, { useEffect, useState } from "react";
import { TarjetaPersona } from "./TarjetaPersona";

function ListaTarjetas({ listado }) {
  const [visibles, setVisibles] = useState([]);

  // -- efecto cascada
  useEffect(() => {
    listado.forEach((_, i) => {
      setTimeout(() => {
        setVisibles((prev) => [...prev, i]);
      }, i * 100);
    });
  }, [listado]);

  return (
    <div className="p-4 space-y-4">
      {listado.map((persona, index) => (
        <div
          key={persona.id}
          className={`transition-all duration-700 ease-out transform ${
            visibles.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <TarjetaPersona
            id={persona.id}
            nombre={persona.nombre}
            apellido={persona.apellido}
            edad={persona.edad}
            email={persona.email}
            foto={persona.foto}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaTarjetas;

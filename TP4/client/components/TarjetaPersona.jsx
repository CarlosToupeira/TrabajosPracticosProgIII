import React from "react";
import { Link } from "react-router-dom";

export function TarjetaPersona({ id, nombre, apellido, edad, email, foto }) {
  return (
    <div className="tarjeta">
      <img
        src={foto}
        alt={`${nombre} ${apellido}`}
        className="tarjeta-foto"
        loading="lazy"
      />
      <div className="tarjeta-info">
        <strong className="tarjeta-nombre">
          {nombre} {apellido}
        </strong>
        <p className="tarjeta-edad">
          <strong>Edad:</strong> {edad} años
        </p>
        <p className="tarjeta-email">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export function TarjetaPersona({ id, nombre, apellido, edad, email, foto }) {
  return (
    <div className="my-4 border-1 border-gray-700/60 w-2xl p-5 shadow-lg rounded-lg flex flex-row gap-4">
      <div className="w-48">
        <img
          src={foto}
          alt="profile photo"
          className="w-32 h-32 rounded-full"
        />
      </div>

      <div className="w-full">
        {/* -- nombre y apellido -- */}
        <div className="w-full mb-2">
          <strong className="text-2xl">
            {nombre} {apellido}
          </strong>
        </div>
        <div>
          <p>
            <strong>Edad:</strong> {edad} años
          </p>
          <Link to={`mailto:${email}`}>{email}</Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { FormEvent } from "react";

import { useState } from "react";

export default function Afiliacion() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    correo: "",
    cedula: "",
    telefono: "",
    familiares: 0,
    direccion: "",
  });

  const handleChange = (e: FormEvent) => {
    setFormData({
      ...formData,
      //[e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    //  here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div
      className="  flex 
 h-screen items-center justify-center"
    >
      <form
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="text-gray-700 mb-2 block text-sm font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="text-gray-700 focus:shadow-outline w-full rounded border px-3 py-2 leading-tight shadow 
 focus:outline-none"
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        {/* aqui necesito agregar los otros campos */}
        <div className="mb-4">
          <label
            className="text-gray-700 mb-2 block text-sm font-bold"
            htmlFor="familiares"
          >
            Familiares
          </label>
          <select
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
            id="familiares"
            value={formData.familiares}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            {/* ... other options up to 10 */}
          </select>
        </div>
        <div className="mb-6">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

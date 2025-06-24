import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Eventos Innolvidables</h1>
      <ul className="flex space-x-6">
        <li><a href="#inicio" className="hover:underline">Inicio</a></li>
        <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
        <li><a href="#plano" className="hover:underline">Plano</a></li>
        <li><a href="#contacto" className="hover:underline">Contacto</a></li>
        <li><a href="#licencia" className="hover:underline">Licencia</a></li>
      </ul>
    </nav>
  );
}

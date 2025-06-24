import React from 'react';
import planoImage from './assets/plano_empresa.png';

export default function Plano() {
  return (
    <section id="plano" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras modernas instalaciones diseñadas para eventos exclusivos
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <img 
            src={planoImage} 
            alt="Plano de la empresa" 
            className="rounded-lg shadow-md w-full h-auto mx-auto border border-gray-200" 
          />
        </div>
        
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <span className="block text-blue-600 font-bold text-lg">Área Principal</span>
            <span className="text-gray-600">Capacidad: 200 personas</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <span className="block text-purple-600 font-bold text-lg">Salones VIP</span>
            <span className="text-gray-600">3 salones privados</span>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <span className="block text-green-600 font-bold text-lg">Zona Catering</span>
            <span className="text-gray-600">Cocina profesional</span>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <span className="block text-yellow-600 font-bold text-lg">Estacionamiento</span>
            <span className="text-gray-600">50 espacios</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import planoImage from './assets/plano_empresa.jpg';

const facilities = [
  {
    title: "Área Principal",
    description: "Capacidad: 200 personas",
    icon: "👥",
    color: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Salones VIP",
    description: "3 salones privados",
    icon: "⭐",
    color: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    title: "Zona Catering",
    description: "Cocina profesional",
    icon: "🍽️",
    color: "bg-green-50",
    textColor: "text-green-600"
  },
  {
    title: "Estacionamiento",
    description: "50 espacios",
    icon: "🚗",
    color: "bg-yellow-50",
    textColor: "text-yellow-600"
  }
];

export default function Plano() {
  return (
    <section id="plano" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-blue-600">Instalaciones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Espacios diseñados para crear experiencias memorables y exclusivas
          </p>
        </motion.div>
        
        {/* Contenedor del plano con efecto hover */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-12"
        >
          <div className="overflow-hidden rounded-lg">
            <img 
              src={planoImage} 
              alt="Plano de nuestras instalaciones" 
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
        
        {/* Características con animación escalonada */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${facility.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all`}
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className={`${facility.textColor} font-bold text-xl mb-2`}>{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
            Solicitar Tour Virtual
          </button>
        </motion.div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra <span className="text-blue-600">Filosofía</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-800">
              Más de 10 años creando momentos inolvidables
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              En Eventos Élite, combinamos innovación, elegancia y precisión para transformar tus visiones en realidades impactantes. Cada evento es una narrativa única que diseñamos meticulosamente.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Misión</h4>
                <p className="text-gray-600">Superar expectativas a través de experiencias memorables</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Visión</h4>
                <p className="text-gray-600">Ser referentes en innovación de eventos a nivel global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
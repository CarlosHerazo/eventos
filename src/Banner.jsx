import React from 'react';
import { motion } from 'framer-motion';
import qrImage from './assets/qr_video.png';

export default function Banner() {
  return (
    <section id="inicio" className="relative h-screen bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
      {/* Video background placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center opacity-40"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Experiencias</span> que Inspiran
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Diseñamos eventos memorables con atención meticulosa a cada detalle y tecnología innovadora.
            </p>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all"
              >
                Contactar Ahora
              </motion.button>
              
              <div className="flex items-center gap-4">
                <img src={qrImage} alt="QR" className="w-24 h-24 border-2 border-white shadow-md"/>
                <div>
                  <p className="text-sm font-medium text-gray-600">Escanea para ver</p>
                  <p className="font-semibold text-blue-600">Nuestro showreel</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Diagonal effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-50 transform skew-y-3 origin-top-left"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
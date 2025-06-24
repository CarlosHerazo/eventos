import React from 'react';
import { motion } from 'framer-motion';
import qrImage from './assets/qr_video.png';

export default function Banner() {
  // Elementos flotantes (partículas de luz)
  const floatingElements = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 6 + 2;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/30"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 40 - 20],
          x: [0, Math.random() * 40 - 20],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    );
  });

  return (
    <section id="inicio" className="relative h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Elementos flotantes */}
      {floatingElements}
      
      {/* Video background con animación sutil */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center opacity-30"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      
      {/* Contenido principal */}
      <div className="relative h-full flex items-center justify-center z-10 px-6">
        <div className="text-center max-w-4xl">
          {/* Título principal con animación */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
              className="text-6xl md:text-8xl font-bold text-white mb-6"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ y: -5 }}
              >
                Sueños
              </motion.span>{' '}
              <motion.span 
                className="inline-block text-blue-300"
                whileHover={{ scale: 1.1 }}
              >
                &
              </motion.span>{' '}
              <motion.span 
                className="inline-block"
                whileHover={{ y: -5 }}
              >
                Detalles
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transformamos tus visiones en realidades con creatividad y precisión
          </motion.p>
          
          {/* Botones y QR */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-medium text-lg shadow-xl transition-all"
            >
              Comencemos
            </motion.button>
            
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.03 }}
            >
              <motion.img 
                src={qrImage} 
                alt="QR" 
                className="w-24 h-24 border-2 border-white/30 shadow-lg rounded-lg"
                whileHover={{ rotate: 2 }}
              />
              <div className="text-left">
                <p className="text-sm font-medium text-white/70">Escanea para ver</p>
                <p className="font-semibold text-blue-300">Nuestro video</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Efecto diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-50 transform skew-y-3 origin-top-left"></div>
      
      {/* Flecha de scroll animada */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
import React from 'react';
import qrImage from './assets/qr_video.png';
import bannerImage from './assets/banner-eventos.jpg';

export default function Banner() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Banner con corte diagonal */}
      <div className="relative h-[80vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70"></div>
        <img 
          src={bannerImage} 
          alt="Evento banner" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Contenido superpuesto */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl ml-auto bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Eventos</span> Inolvidables
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Creamos experiencias únicas que perdurarán en tu memoria
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center">
                  <img src={qrImage} alt="QR Video" className="w-40 h-40 mx-auto"/>
                  <p className="mt-2 text-gray-700 font-medium">Escanea para ver más</p>
                </div>
                
                <div className="bg-blue-600 text-white p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Próximo evento:</h3>
                  <p className="mb-2">25 Noviembre 2023</p>
                  <p className="text-sm">Convención Anual de Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Efecto diagonal */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white transform skew-y-3 origin-top-left"></div>
      </div>
    </section>
  );
}
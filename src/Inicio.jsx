import React from 'react';
import qrImage from './assets/qr_video.png';

export default function Inicio() {
  return (
    <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Eventos Carlos
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
            Creando experiencias memorables con innovación y pasión
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-full lg:w-2/3">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <iframe
                src="https://www.youtube.com/embed/TU_VIDEO_ID"
                title="Video presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <img 
              src={qrImage} 
              alt="Código QR para ver video" 
              className="w-40 mx-auto mb-4" 
            />
            <p className="text-lg font-medium">Escanea para ver nuestro video</p>
            <p className="text-sm opacity-80 mt-2">Disponible en todas las plataformas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
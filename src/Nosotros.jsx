import React from 'react';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quiénes Somos</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos un equipo apasionado por crear experiencias únicas. Con más de 10 años en la industria,
              hemos perfeccionado el arte de la organización de eventos con un toque personal y tecnología innovadora.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Misión
                </h4>
                <p className="text-gray-600 pl-5">
                  Transformar tus ideas en realidades inolvidables, superando expectativas con creatividad
                  y atención meticulosa a cada detalle.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Visión
                </h4>
                <p className="text-gray-600 pl-5">
                  Ser reconocidos como líderes innovadores en la industria de eventos, expandiendo nuestro
                  alcance mientras mantenemos nuestra esencia personalizada.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-3xl font-bold text-blue-600">10+</span>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-3xl font-bold text-blue-600">500+</span>
                <p className="text-gray-600">Eventos realizados</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-3xl font-bold text-blue-600">98%</span>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-3xl font-bold text-blue-600">50+</span>
                <p className="text-gray-600">Colaboradores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const clients = [
  { 
    name: "TechSolutions Inc.", 
    logo: (
      <svg viewBox="0 0 100 40" className="w-24 h-10">
        <text x="0" y="30" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#2563EB">TechSolutions</text>
      </svg>
    ), 
    testimonial: "La mejor organización de eventos tecnológicos que hemos contratado." 
  },
  { 
    name: "Global Marketing", 
    logo: (
      <svg viewBox="0 0 100 40" className="w-24 h-10">
        <rect x="5" y="5" width="90" height="30" rx="5" fill="#7C3AED" opacity="0.2"/>
        <text x="50" y="28" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#7C3AED">GLOBAL</text>
      </svg>
    ),
    testimonial: "Nuestra conferencia anual fue un éxito rotundo gracias a su equipo." 
  },
  { 
    name: "Creativa Design", 
    logo: (
      <svg viewBox="0 0 100 40" className="w-24 h-10">
        <path d="M10,20 Q25,5 40,20 T70,20" stroke="#059669" fill="none" strokeWidth="2"/>
        <text x="50" y="30" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#059669">Creativa</text>
      </svg>
    ),
    testimonial: "Creatividad y profesionalismo en cada detalle de nuestro evento." 
  },
  { 
    name: "FinanCorp", 
    logo: (
      <svg viewBox="0 0 100 40" className="w-24 h-10">
        <circle cx="20" cy="20" r="15" fill="#D97706" opacity="0.2"/>
        <text x="50" y="28" textAnchor="middle" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#D97706">FinanCorp</text>
      </svg>
    ),
    testimonial: "El servicio impecable hizo que nuestra junta anual fuera perfecta." 
  },
  { 
    name: "EduFuture", 
    logo: (
      <svg viewBox="0 0 100 40" className="w-24 h-10">
        <polygon points="10,35 50,5 90,35" fill="#DC2626" opacity="0.1"/>
        <text x="50" y="30" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#DC2626">EduFuture</text>
      </svg>
    ),
    testimonial: "Nuestro congreso educativo tuvo la mejor organización posible." 
  }
];

export default function Clientes() {
  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Confían en <span className="text-blue-600">Nosotros</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas líderes que han disfrutado de nuestros servicios
          </p>
        </div>
        
        {/* Logos de clientes - Carrusel */}
        <div className="mb-16 px-4">
          <div className="flex overflow-x-auto pb-8 scrollbar-hide space-x-8">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex flex-col items-center">
                  <div className="mb-3">
                    {client.logo}
                  </div>
                  <span className="text-xs text-gray-500">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonios */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {clients.slice(0, 3).map((client, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500">
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1">
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">"{client.testimonial}"</p>
                    <p className="font-semibold text-gray-800">{client.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
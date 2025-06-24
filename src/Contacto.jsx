import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tu próximo evento especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 w-full">
              <iframe
                title="Ubicación Satelital"
                src="https://www.google.com/maps/embed?pb=TU_EMBED_MAP_CODE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-gray-600">Calle Principal #123, Ciudad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contacto@eventoscarlos.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-green-500 hover:text-green-700">
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="+1 234 567 890"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Cuéntanos sobre tu evento..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition shadow-md"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
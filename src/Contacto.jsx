import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Contáctanos</span> Hoy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos tus ideas en eventos inolvidables
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tarjeta de información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="h-80 w-full relative">
              <iframe
                title="Ubicación de nuestros eventos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.5619011856863!3d6.201505595493862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468280b4f3643d%3A0x1a6d3f9cba9f4c0e!2sPlaza%20Botero!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nuestra Ubicación</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dirección Principal</h4>
                    <p className="text-gray-600">Carrera 45 #20-10, Medellín, Colombia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Teléfonos</h4>
                    <p className="text-gray-600">+57 4 444 5555</p>
                    <p className="text-gray-600">+57 310 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Correo Electrónico</h4>
                    <p className="text-gray-600">info@eventospremium.com</p>
                    <p className="text-gray-600">ventas@eventospremium.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-gray-800">Síguenos en Redes</h4>
                <div className="flex space-x-5">
                  <motion.a 
                    href="#" 
                    className="bg-blue-100 p-3 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaFacebook size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-pink-100 p-3 rounded-full text-pink-600 hover:text-white hover:bg-pink-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-blue-100 p-3 rounded-full text-blue-400 hover:text-white hover:bg-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:text-white hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaWhatsapp size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Escríbenos</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="+57 310 123 4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="evento" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  id="evento"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="boda">Boda</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="social">Evento Social</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Descríbenos tu evento, fecha estimada y cualquier requerimiento especial..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
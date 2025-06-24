import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Eventos</span> Carlos
            </h3>
            <p className="text-gray-400">
              Creando experiencias memorables con innovación y pasión desde 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-blue-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-blue-400 transition">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-blue-400 transition">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-blue-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Principal #1234, Distrito Eventos<br />
                  Ciudad, País
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@eventoscarlos.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Lun-Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Boletín informativo */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir nuestras últimas noticias y promociones.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Eventos Carlos. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">
              Términos y condiciones
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
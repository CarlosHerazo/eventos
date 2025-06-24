import React from 'react';

export default function Licencia() {
  return (
    <section className="py-8 px-4 bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-600 mb-4">
          © {new Date().getFullYear()} Eventos Carlos. Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-500">
          Esta obra está bajo una licencia{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional
          </a>.
        </p>
      </div>
    </section>
  );
}
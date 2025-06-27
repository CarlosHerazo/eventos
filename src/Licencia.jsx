export default function Licencia() {
  return (
    <section className="py-8 px-4 bg-gray-100 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-600 mb-2">
          <a
            href="https://eventos-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Sueños&Detalles
          </a>{' '}
          © {new Date().getFullYear()} por{' '}
          <a
            href="https://eventos-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Laura Vergara
          </a>
        </p>

        <p className="text-sm text-gray-500 flex items-center justify-center gap-1 flex-wrap">
          Está licenciado bajo una{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Licencia Creative Commons Atribución 4.0 Internacional
          </a>
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt="CC"
            className="inline-block w-4 h-4 ml-1"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt="BY"
            className="inline-block w-4 h-4"
          />
        </p>
      </div>
    </section>
  );
}

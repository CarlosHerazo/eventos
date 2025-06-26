import { FaRss } from 'react-icons/fa';

const RssFloatingButton = () => {
  return (
    <a
      href="/feed_eventos.xml"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      aria-label="Suscribirse vía RSS"
    >
      <FaRss className="text-xl" />
    </a>
  );
};

export default RssFloatingButton;

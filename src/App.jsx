import React from 'react';
import Navbar from './components/Navbar';
import Banner from './Banner';
import Nosotros from './Nosotros';
import Clientes from './Clientes';
import Galeria from './Galeria';
import Plano from './Plano';
import Contacto from './Contacto';
import RssSubscribe from './RssSubscribe';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Nosotros />
        <Clientes />
        <Galeria />
        <Plano />
        <Contacto />
        <RssSubscribe />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
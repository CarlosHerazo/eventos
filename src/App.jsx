import React from 'react';
import Navbar from './components/Navbar';
import Banner from './Banner';
import Nosotros from './Nosotros';
import Clientes from './Clientes';
import Galeria from './Galeria';
import Plano from './Plano';
import Contacto from './Contacto';
import Licencia from './Licencia';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Nosotros />
        <Clientes />
        <Galeria />
        <Plano />
        <Contacto />
      </main>
      <Licencia />
      <Footer />
    </div>
  );
}
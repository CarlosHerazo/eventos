import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const eventos = [
  {
    id: 1,
    titulo: "Gala Benéfica 2023",
    imagen: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    descripcion: "Una noche mágica recaudando fondos para la educación"
  },
  {
    id: 2,
    titulo: "Lanzamiento Corporativo",
    imagen: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    descripcion: "Presentación innovadora de producto con realidad aumentada"
  },
  {
    id: 3,
    titulo: "Boda de Ensueño",
    imagen: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    descripcion: "Celebración íntima con decoración floral espectacular"
  }
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-blue-600">Eventos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-xl shadow-2xl overflow-hidden"
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1.3 }
          }}
        >
          {eventos.map((evento) => (
            <SwiperSlide key={evento.id}>
              <div className="relative h-96 w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${evento.imagen})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{evento.titulo}</h3>
                  <p className="text-lg">{evento.descripcion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
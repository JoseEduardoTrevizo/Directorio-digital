import React, { useState, useRef } from "react";
import agro1 from "../../assets/banners/agro1.jpg";
import agro2 from "../../assets/banners/agro2.jpg";
import agro3 from "../../assets/banners/agro3.jpg";
import agro4 from "../../assets/banners/agro4.jpg";
import agro5 from "../../assets/banners/agro5.jpg";
import agro6 from "../../assets/banners/agro6.jpg";
import fab1 from "../../assets/banners/fab1.jpg";
import fab2 from "../../assets/banners/fab2.jpg";
import fab3 from "../../assets/banners/fab3.jpg";
import fab4 from "../../assets/banners/fab4.jpg";
import fab5 from "../../assets/banners/fab5.jpg";
import fab6 from "../../assets/banners/fab6.jpg";
import maq1 from "../../assets/banners/maq1.jpg";
import maq2 from "../../assets/banners/maq2.jpg";
import maq3 from "../../assets/banners/maq3.jpg";
import maq4 from "../../assets/banners/maq4.jpg";
import maq5 from "../../assets/banners/maq5.jpg";
import maq6 from "../../assets/banners/maq6.jpg";

const MOCK_CATEGORIAS = [
  {
    id: 1,
    titulo: "Maquinaria Agricola",
    items: [
      {
        id: 1,
        nombre: "Torno CNC Modelo X4",
        tag: "Agroindustria",
        img: agro1, // https://images.unsplash.com/photo-1581093588401-9c8b1e5f0c8e?auto=format&fit=crop&w=800&q=60,
      },
      {
        id: 2,
        nombre: "Fresadora Vertical Modelo F5",
        tag: "Agroindustria",
        img: agro2,
      },
      {
        id: 3,
        nombre: "Centro de Mecanizado Modelo C3",
        tag: "Agroindustria",
        img: agro3,
      },
      {
        id: 4,
        nombre: "Prensa Hidráulica Modelo P2",
        tag: "Agroindustria",
        img: agro4,
      },
      {
        id: 5,
        nombre: "Cortadora Láser Modelo L7",
        tag: "Agroindustria",
        img: agro5,
      },
      {
        id: 6,
        nombre: "Impresora 3D Industrial Modelo I9",
        tag: "Agroindustria",
        img: agro6,
      },
    ],
  },
  {
    id: 2,
    titulo: "Fabricación y Servicios",
    items: [
      {
        id: 1,
        nombre: "Servicio de Mantenimiento Industrial",
        tag: "Servicios",
        img: fab1,
      },
      {
        id: 2,
        nombre: "Consultoría en Ingeniería",
        tag: "Servicios",
        img: fab2,
      },
      {
        id: 3,
        nombre: "Diseño de Maquinaria Especializada",
        tag: "Servicios",
        img: fab3,
      },
      {
        id: 4,
        nombre: "Implementación de Sistemas de Producción",
        tag: "Servicios",
        img: fab4,
      },
      {
        id: 5,
        nombre: "Capacitación en Operación de Maquinaria",
        tag: "Servicios",
        img: fab5,
      },
      {
        id: 6,
        nombre: "Fabricación de Componentes Personalizados",
        tag: "Servicios",
        img: fab6,
      },
    ],
  },
  {
    id: 3,
    titulo: "Maquinaria Industrial",
    items: [
      {
        id: 1,
        nombre: "Tractor Agrícola Modelo T1",
        tag: "Agroindustria",
        img: maq1,
      },
      {
        id: 2,
        nombre: "Cultivador de Suelo Modelo C2",
        tag: "Agroindustria",
        img: maq2,
      },
      {
        id: 3,
        nombre: "Segadora de Pasto Modelo S3",
        tag: "Agroindustria",
        img: maq3,
      },
      {
        id: 4,
        nombre: "Fertilizador Automático Modelo F4",
        tag: "Agroindustria",
        img: maq4,
      },
      {
        id: 5,
        nombre: "Irrigador por Goteo Modelo I5",
        tag: "Agroindustria",
        img: maq5,
      },
      {
        id: 6,
        nombre: "Máquina de Trituración Modelo T6",
        tag: "Agroindustria",
        img: maq6,
      },
    ],
  },
];

const VISIBLES = 4;

function CarouselRow({ categoria }) {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const maxOffset = categoria.items.length - VISIBLES;

  const getCardWidth = () => {
    const card = trackRef.current?.querySelector(".carousel-item");
    if (!card) return 0;
    return card.offsetWidth + 14; // 14px = gap
  };

  const slide = (dir) => {
    const next = Math.max(0, Math.min(offset + dir, maxOffset));
    setOffset(next);
    if (trackRef.current) {
      trackRef.current.style.transition =
        "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
      trackRef.current.style.transform = `translateX(-${next * getCardWidth()}px)`;
    }
  };

  return (
    <div className="carousel-category">
      <div className="carousel-category-header">
        <h2 className="carousel-category-title">{categoria.titulo}</h2>
      </div>

      <div className="carousel-row">
        <button
          className={`carousel-arrow carousel-arrow-left ${offset === 0 ? "carousel-arrow-disabled" : ""}`}
          onClick={() => slide(-1)}
        >
          &#8249;
        </button>

        <div className="carousel-track-outer">
          <div className="carousel-track" ref={trackRef}>
            {categoria.items.map((item, index) => {
              const isLastVisible = index === offset + VISIBLES - 1;
              return (
                <div
                  key={item.id}
                  className={`carousel-item ${isLastVisible ? "carousel-item-last" : ""}`}
                >
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="carousel-image"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={`carousel-arrow carousel-arrow-right ${offset >= maxOffset ? "carousel-arrow-disabled" : ""}`}
          onClick={() => slide(1)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default function CarouselNetflix({ categorias = MOCK_CATEGORIAS }) {
  return (
    <section className="carousel-netflix">
      {categorias.map((categoria) => (
        <CarouselRow key={categoria.id} categoria={categoria} />
      ))}
    </section>
  );
}

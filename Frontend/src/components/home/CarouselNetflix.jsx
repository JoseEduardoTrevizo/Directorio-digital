import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeService from "../../services/homeService";
const VISIBLES = 4;

function CarouselRow({ categoria }) {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const maxOffset = Math.max(0, categoria.empresas.length - VISIBLES);

  const getCardWidth = () => {
    const card = trackRef.current?.querySelector(".carousel-item");
    if (!card) return 0;
    return card.offsetWidth + 14;
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
        <h2 className="carousel-category-title">{categoria.sector}</h2>
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
            {categoria.empresas.map((empresa, index) => {
              const isLastVisible = index === offset + VISIBLES - 1;
              return (
                <div
                  key={empresa.empresaId}
                  className={`carousel-item ${isLastVisible ? "carousel-item-last" : ""} ${empresa.plan === "Plan Premium" ? "carousel-item-destacado" : ""}`}
                  onClick={() => navigate(`/empresa/${empresa.empresaId}`)}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src={empresa.imagenUrl}
                    alt={empresa.nombre}
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

export default function CarouselNetflix() {
  const [sectoresCarrusel, setSectoresCarrusel] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    homeService
      .obtenerCarruselInicio()
      .then(setSectoresCarrusel)
      .catch((err) => console.error("Error al cargar carrusel:", err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return null; // o un skeleton, según prefieras
  if (!sectoresCarrusel.length) return null; // ningún sector con empresas aún

  return (
    <section className="carousel-netflix">
      {sectoresCarrusel.map((categoria) => (
        <CarouselRow key={categoria.sectorId} categoria={categoria} />
      ))}
    </section>
  );
}

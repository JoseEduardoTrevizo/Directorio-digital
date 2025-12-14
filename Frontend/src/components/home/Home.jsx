import React from "react";
import search from "../../assets/icons/search.svg";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section_container">
          <h1 className="title_hero-section">
            Conectando el Motor <strong>de Nuestra Region</strong>
          </h1>
          <p className="hero-section_eslogan">
            Encuentra empresas locales de manufactura, agricultura y servicios
            en un solo lugar
          </p>
          <div className="container_search">
            <input
              className="hero-section_search"
              placeholder="Buscar empresas, productos o servicios..."
            ></input>
            <button className="hero-button_search">
              <img src={search} alt="Search" />
              Buscar
            </button>
          </div>

          <div className="category-buttons">
            <button className="category-btn">
              <svg
                className="category-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span>Manufactura</span>
            </button>

            <button className="category-btn">
              <svg
                className="category-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>Agricultura</span>
            </button>

            <button className="category-btn">
              <svg
                className="category-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Servicios</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

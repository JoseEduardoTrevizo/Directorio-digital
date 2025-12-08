import React from "react";
import cuauh from "../../assets/images/cuauhtemoc.jpg";

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
            <button className="hero-button_search">Buscar</button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

import React, { useEffect, useState } from "react";
import search from "../../assets/icons/search.svg";
import euro from "../../assets/icons/euro.svg";
import dolar from "../../assets/icons/money.svg";
import cloud from "../../assets/icons/cloud.svg";
import homeService from "../../services/homeService";
import ExchangeChart from "../../utils/ExchangeChart";

export default function Home() {
  const [tipoCambio, setTipoCambio] = useState(null);
  const [clima, setClima] = useState(null);
  const [loadingClima, setLoadingClima] = useState(true);

  useEffect(() => {
    const fetchTipoCambio = async () => {
      try {
        const Data = await homeService.obtenerTipoCambioUSD();
        setTipoCambio(Data);
      } catch (error) {
        console.error("Error al obtener el tipo de cambio:", error);
      }
    };

    const fetchClima = async () => {
      try {
        const dataClima = await homeService.getClima("Cuauhtemoc");
        setClima(dataClima);
        setLoadingClima(false);
      } catch (error) {
        console.error("Error al obtener el clima:", error);
        setLoadingClima(false);
      }
    };

    fetchTipoCambio();
    fetchClima();
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-section_container">
          <h1 className="title_hero-section">
            Conectando el Motor <strong>de Nuestra Region</strong>
          </h1>

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
          <p className="hero-section_eslogan">
            Encuentra empresas locales de manufactura, agricultura y servicios
            en un solo lugar
          </p>

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

      <section className="barra_Exchange">
        <div className="containerWeather">
          <img
            src={clima?.icono || cloud}
            alt="Weather"
            className="weather-icon"
          />
          <div className="weather-info">
            <p className="weather-location">{clima?.ciudad || ""}</p>

            <p className="weather-temperature">
              <strong>{`${clima?.temperatura}°C` || "28°C"}</strong>
            </p>
          </div>
        </div>
        <div className="nw-grid">
          <div className="nw-item">
            <ExchangeChart sym={dolar} moneda="usdTomxn" par="USD" dias={7} />
          </div>

          <div className="nw-item">
            <ExchangeChart sym={euro} moneda="eurTomxn" par="EUR" dias={7} />
          </div>

          <div className="nw-item">
            <ExchangeChart sym={dolar} moneda="cadTomxn" par="CAD" dias={7} />
          </div>
        </div>
      </section>
    </>
  );
}

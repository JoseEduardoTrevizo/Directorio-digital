import React, { useState } from "react";
import filtro from "../assets/icons/filter.svg";
import bannerPublicitario from "../assets/adds/images.jpg";
import Card_vacante from "../components/vacantes/Card_vacante";
import Popup_vacante from "../components/vacantes/Popup_vacante";
import Popup_aplicar from "../components/vacantes/Popup_aplicar";

export default function Vacantes() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupAplicar, setPopupAplicar] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="containerVacantes">
        <div className="vacantes-container">
          <h1 className="empresasTitle">
            Vacantes <span>Disponibles</span>
          </h1>
          <h2 className="empresasSubtitle">
            Encuentra la oportunidad perfecta entre cientos de vacantes de
            empresas lideres
          </h2>
        </div>

        <div className="containerSearch">
          <input
            className="inputSearch"
            placeholder="Buscar trabajos..."
          ></input>
          <select className="filterSelect" name="categoria" value={""}>
            <option value="">Todos</option>
            <option value="Manufactura">Manufactura</option>
            <option value="Servicios">Servicios</option>
            <option value="Comics">Comics</option>
          </select>
          <select className="filterSelect" name="ubicacion" value={""}>
            <option value="">Todos</option>
            <option value="Cuauhtemoc">Cuauhtemoc</option>
          </select>
          <button className="filter-button">
            <img className="imgFilter" src={filtro} />
            Filtrar
          </button>
        </div>

        <div className="containerBanerVacante">
          <img className="imgbannerVacante" src={bannerPublicitario}></img>
        </div>

        <div className="container_Card-vacante">
          <Card_vacante onClick={handleOpenPopup} />
          <Card_vacante onClick={handleOpenPopup} />
          <Card_vacante onClick={handleOpenPopup} />
          <Card_vacante onClick={handleOpenPopup} />
          <Card_vacante onClick={handleOpenPopup} />
          <Card_vacante onClick={handleOpenPopup} />
        </div>
        {isPopupOpen && (
          <Popup_vacante
            onClose={() => {
              setIsPopupOpen(false);
            }}
            onAplicar={() => {
              setIsPopupOpen(false); // cierra el primero
              setPopupAplicar(true); // abre el segundo
            }}
          />
        )}

        {popupAplicar && (
          <Popup_aplicar onClose={() => setPopupAplicar(false)} />
        )}
      </div>
    </>
  );
}

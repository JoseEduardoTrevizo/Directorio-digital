import React from "react";
import filtro from "../assets/icons/filter.svg";
import bannerPublicitario from "../assets/adds/images.jpg";

export default function Vacantes() {
  return (
    <>
      <div className="containerVacantes">
        <div className="empresasTitle-container">
          <h1 className="empresasTitle">Vacantes Disponibles</h1>
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
          <select
            className="filterSelect"
            name="categoria"
            value={""}
            onChange={""}
          >
            <option value="">Todos</option>
            <option value="Manufactura">Manufactura</option>
            <option value="Servicios">Servicios</option>
            <option value="Comics">Comics</option>
          </select>
          <select
            className="filterSelect"
            name="ubicacion"
            value={""}
            onChange={""}
          >
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
      </div>
    </>
  );
}

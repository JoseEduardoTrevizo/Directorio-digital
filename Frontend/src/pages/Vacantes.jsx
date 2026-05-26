import React, { useState, useEffect } from "react";
import filtro from "../assets/icons/filter.svg";
import bannerPublicitario from "../assets/adds/images.jpg";
import Card_vacante from "../components/vacantes/Card_vacante";
import Popup_vacante from "../components/vacantes/Popup_vacante";
import Popup_aplicar from "../components/vacantes/Popup_aplicar";
import Popup_metodo from "../components/vacantes/Popup_metodo";
import Popup_cv from "../components/vacantes/Popup_cv";
import { vacantesDisponibles } from "../services/vacantesService";

export default function Vacantes() {
  const [popup, setPopup] = useState(null);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);
  const [vacantesDisponiblesData, setVacantesDisponiblesData] = useState({
    vacantes: [],
  });

  useEffect(() => {
    fetchVacantes();
  }, []);

  const fetchVacantes = async () => {
    try {
      const data = await vacantesDisponibles();
      setVacantesDisponiblesData(data);
    } catch (error) {
      console.error("Error fetching vacantes:", error);
    }
  };

  const handleOpenPopup = (vacante) => {
    setVacanteSeleccionada(vacante);
    setPopup("vacante");
  };

  const handleCloseAll = () => {
    setPopup(null);
    setVacanteSeleccionada(null);
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
          {vacantesDisponiblesData.vacantes
            .filter((vacante) => vacante.estatus === "Activa")
            .map((vacante) => (
              <Card_vacante
                key={vacante.id}
                vacante={vacante}
                onClick={handleOpenPopup}
              />
            ))}
        </div>
        {popup === "vacante" && (
          <Popup_vacante
            onClose={handleCloseAll}
            onAplicar={() => setPopup("metodo")}
            dataVacante={vacanteSeleccionada}
          />
        )}

        {popup === "metodo" && (
          <Popup_metodo
            vacante={vacanteSeleccionada}
            onClose={handleCloseAll}
            onFormulario={() => setPopup("formulario")}
            onCV={() => setPopup("cv")}
          />
        )}

        {popup === "formulario" && (
          <Popup_aplicar
            vacante={vacanteSeleccionada}
            onClose={handleCloseAll}
            onBack={() => setPopup("metodo")}
          />
        )}

        {popup === "cv" && (
          <Popup_cv
            vacante={vacanteSeleccionada}
            onClose={handleCloseAll}
            onBack={() => setPopup("metodo")}
          />
        )}
      </div>
    </>
  );
}

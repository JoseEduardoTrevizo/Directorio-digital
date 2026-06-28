import React, { useState, useEffect } from "react";
import Select from "react-select";
import filtro from "../assets/icons/filter.svg";
import bannerPublicitario from "../assets/adds/images.jpg";
import Card_vacante from "../components/vacantes/Card_vacante";
import Popup_vacante from "../components/vacantes/Popup_vacante";
import Popup_aplicar from "../components/vacantes/Popup_aplicar";
import Popup_metodo from "../components/vacantes/Popup_metodo";
import Popup_cv from "../components/vacantes/Popup_cv";
import {
  vacantesDisponibles,
  incrementarVistas,
} from "../services/vacantesService";

export default function Vacantes() {
  const [popup, setPopup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);
  const [vacantesDisponiblesData, setVacantesDisponiblesData] = useState({
    vacantes: [],
  });
  const opciones = [
    { value: "Manufactura", label: "Manufactura" },
    { value: "Agricultura", label: "Agricultura y Agroindustria" },
    { value: "Construccion", label: "Construcción" },
    { value: "Tecnologia", label: "Tecnología y Software" },
    { value: "Salud", label: "Salud y Medicina" },
    { value: "Educacion", label: "Educación" },
    { value: "Transporte", label: "Transporte y Logística" },
    { value: "Comercio", label: "Comercio y Retail" },
    { value: "Alimentos", label: "Alimentos y Bebidas" },
    { value: "FinancieroS", label: "Servicios Financieros" },
    { value: "Turismo", label: "Turismo y Hospitalidad" },
    { value: "Energia", label: "Energía y Utilities" },
    { value: "Otro", label: "Otro" },
  ];
  const opciones_ciudades = [
    { value: "Cuauhtemoc", label: "Cuauhtemoc" },
    { value: "Chihuahua", label: "Chihuahua" },
  ];

  const [filtros, setFiltros] = useState({
    busqueda: "",
    industria: null,
    ciudad: null,
  });

  useEffect(() => {
    fetchVacantes();
  }, []);

  const fetchVacantes = async () => {
    try {
      setLoading(true);
      const [data] = await Promise.all([
        vacantesDisponibles(),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
      setVacantesDisponiblesData(data);
    } catch (error) {
      console.error("Error fetching vacantes:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleOpenPopup = (vacante) => {
    setVacanteSeleccionada(vacante);
    setPopup("vacante");

    incrementarVistas(vacante.id).catch((err) =>
      console.error("Error al actualizar vistas:", err),
    );
  };

  const handleCloseAll = () => {
    setPopup(null);
    setVacanteSeleccionada(null);
  };

  const vacantesFiltradas = vacantesDisponiblesData.vacantes
    .filter((vacante) => vacante.estatus === "Activa")
    .filter((vacante) => {
      const texto = filtros.busqueda.trim().toLowerCase();
      if (!texto) return true;

      const puesto = vacante.puesto?.toLowerCase() || "";
      const empresa = vacante.nombre?.toLowerCase() || "";

      return puesto.includes(texto) || empresa.includes(texto);
    })
    .filter((vacante) => {
      if (!filtros.industria) return true;
      return vacante.industria === filtros.industria;
    })
    .filter((vacante) => {
      if (!filtros.ciudad) return true;
      return vacante.ciudadTrabajo === filtros.ciudad;
    });

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
            placeholder="Buscar por puesto o empresa..."
            value={filtros.busqueda}
            onChange={(e) =>
              setFiltros({ ...filtros, busqueda: e.target.value })
            }
          />
          <div className="container_Select">
            <Select
              options={opciones}
              placeholder="Selecciona tu Industria"
              classNamePrefix="select"
              isClearable
              onChange={(selected) =>
                setFiltros({ ...filtros, industria: selected?.value || null })
              }
            />
          </div>
          <div className="container_Select">
            <Select
              options={opciones_ciudades}
              placeholder="Selecciona tu Ciudad"
              classNamePrefix="select"
              isClearable
              onChange={(selected) =>
                setFiltros({ ...filtros, ciudad: selected?.value || null })
              }
            />
          </div>
          <button className="filter-button">
            <img className="imgFilter" src={filtro} />
            Filtrar
          </button>
        </div>

        <div className="containerBanerVacante">
          <img className="imgbannerVacante" src={bannerPublicitario}></img>
        </div>

        <div className="container_Vacantes">
          {loading ? (
            <div className="loading-stateVacante">
              <div className="spinner" />
              <p className="text_spinner">Cargando vacantes...</p>
            </div>
          ) : vacantesFiltradas.length === 0 ? (
            <p className="no-results">
              No se encontraron vacantes coincidentes
            </p>
          ) : (
            <div className="container_Card-vacante">
              {vacantesFiltradas.map((vacante) => (
                <Card_vacante
                  key={vacante.id}
                  vacante={vacante}
                  onClick={handleOpenPopup}
                />
              ))}
            </div>
          )}
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

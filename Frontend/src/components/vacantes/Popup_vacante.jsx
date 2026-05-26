import React, { useEffect } from "react";
import bussines from "../../assets/icons/business_center.svg";
import location from "../../assets/icons/location.svg";
import paid from "../../assets/icons/paid.svg";
import calendar from "../../assets/icons/calendar.svg";
import { data } from "react-router";

export default function Popup_vacante({ onClose, onAplicar, dataVacante }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const fechaFormateada = new Date(dataVacante.update_at)
    .toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(",", "");
  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup-Vacante">
        <div className="container_headerPopupVacante">
          <div className="header_Card-vacante">
            <img className="iconBusiness" src={bussines} />
            <div className="company-info">
              <h3 className="company-name">{dataVacante?.puesto}</h3>
              <span className="company-category">{dataVacante?.nombre}</span>
            </div>
          </div>
          <div className="popup_Card-vacante">
            <p className="datos_vacante">
              {" "}
              <img className="icon_Subheader" src={location} />{" "}
              {dataVacante?.ciudadTrabajo}
            </p>
            <p className="datos_vacante">
              {" "}
              <img className="icon_Subheader" src={paid} />{" "}
              {dataVacante?.salarioMin} - {dataVacante?.salarioMax}
            </p>
            <p className="datos_vacante">
              {" "}
              <img className="icon_Subheader" src={calendar} />{" "}
              {fechaFormateada}
            </p>
          </div>
        </div>
        <div className="content_popupVacanteBody">
          <div className="body_Card-vacantePopup">
            <h4 className="title_Popup-vacante">Descripcion del Puesto</h4>
            <p className="body_Descripcion">{dataVacante?.descripcion}</p>
          </div>
          <div className="requisitos">
            <h4 className="title_Popup-vacante">Requisitos</h4>
            <p className="body_Descripcion">{dataVacante?.requisitos}</p>
          </div>
          <div className="body_Card-vacantePopup">
            <h4 className="title_Popup-vacante">Ofrecemos</h4>
            <p className="body_Descripcion">{dataVacante?.beneficios}</p>
          </div>
          <div className="skills">
            <h4 className="title_Popup-vacante">Habilidades requeridas</h4>
            <ul className="container_Habilidades">
              {dataVacante?.habilidades?.map((habilidad) => (
                <li className="habilidad" key={habilidad}>
                  {habilidad}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn_Aplicar" onClick={onAplicar}>
          Aplicar Ahora
        </button>
      </div>
    </>
  );
}

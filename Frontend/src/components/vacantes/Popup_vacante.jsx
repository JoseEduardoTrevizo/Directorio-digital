import React, { useEffect } from "react";
import bussines from "../../assets/icons/business_center.svg";
import location from "../../assets/icons/location.svg";
import paid from "../../assets/icons/paid.svg";
import calendar from "../../assets/icons/calendar.svg";

export default function Popup_vacante({ onClose, onAplicar }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup-Vacante">
        <div className="header_Card-vacante">
          <img className="iconBusiness" src={bussines} />
          <div className="company-info">
            <h3 className="company-name">Desarrollador Frontend React</h3>
            <span className="company-category">TechCorp Soulutions</span>
          </div>
        </div>

        <div className="popup_Card-vacante">
          <p className="datos_vacante">
            {" "}
            <img className="icon_Subheader" src={location} /> Cd.Cuauhtemoc
          </p>
          <p className="datos_vacante">
            {" "}
            <img className="icon_Subheader" src={paid} /> 45,000 - 65,000
          </p>
          <p className="datos_vacante">
            {" "}
            <img className="icon_Subheader" src={calendar} /> 04/01/2026
          </p>
        </div>

        <div className="body_Card-vacante">
          <h4 className="title_Popup-vacante">Descripcion del Puesto</h4>
          <p className="body_Descripcion">
            Buscamos un desarrollador Frontend con experiencia en React,
            TypeScript y Tailwind CSS para unirse a nuestro equipo de
            desarrollo. Buscamos un desarrollador Frontend con experiencia en
            React, TypeScript y Tailwind CSS para unirse a nuestro equipo de
            desarrollo.
          </p>
        </div>

        <div className="requisitos">
          <h4 className="title_Popup-vacante">Requisitos</h4>
          <ul className="requisitos_PopupVacante">
            <li>Experiencia mínima de 2 años en el puesto</li>
            <li>Conocimientos técnicos en el área</li>
            <li>Disponibilidad para trabajar en equipo</li>
            <li>Excelente comunicación y proactividad</li>
            <li>Disponibilidad para trabajar en equipo</li>
            <li>Excelente comunicación y proactividad</li>
          </ul>
        </div>

        <div className="skills">
          <h4 className="title_Popup-vacante">Habilidades requeridas</h4>
          <ul className="container_Habilidades">
            <li className="habilidad">React</li>
            <li className="habilidad">TypeScript</li>
            <li className="habilidad">Tailwind</li>
            <li className="habilidad">JavaScript </li>
          </ul>
        </div>

        <button className="btn_Aplicar" onClick={onAplicar}>
          Aplicar Ahora
        </button>
      </div>
    </>
  );
}

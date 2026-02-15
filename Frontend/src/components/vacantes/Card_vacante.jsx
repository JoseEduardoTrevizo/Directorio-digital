import React from "react";
import bussines from "../../assets/icons/business_center.svg";
import location from "../../assets/icons/location.svg";
import paid from "../../assets/icons/paid.svg";
import calendar from "../../assets/icons/calendar.svg";
export default function Card_vacante({ onClick }) {
  return (
    <>
      <div className="card-Vacante" onClick={onClick}>
        <div className="header_Card-vacante">
          <img className="iconBusiness" src={bussines} />
          <h3 className="company-name">Desarrollador Frontend React</h3>
          <span className="company-category">TechCorp Soulutions</span>
        </div>

        <div className="subHeader_Card-vacante">
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
          <p className="body_Descripcion">
            Buscamos un desarrollador Frontend con experiencia en React,
            TypeScript y Tailwind CSS para unirse a nuestro equipo de
            desarrollo. Buscamos un desarrollador Frontend con experiencia en
            React, TypeScript y Tailwind CSS para unirse a nuestro equipo de
            desarrollo.
          </p>
        </div>
      </div>
    </>
  );
}

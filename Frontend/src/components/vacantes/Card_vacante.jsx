import React from "react";
import bussines from "../../assets/icons/business_center.svg";
import location from "../../assets/icons/location.svg";
import paid from "../../assets/icons/paid.svg";
import calendar from "../../assets/icons/calendar.svg";
export default function Card_vacante({ onClick, vacante }) {
  const fechaFormateada = new Date(vacante.update_at)
    .toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(",", "");
  return (
    <>
      <div className="card-Vacante" onClick={() => onClick(vacante)}>
        <div className="header_Card-vacante">
          <div className="header_Card-vacante--company">
            <img className="iconBusiness" src={bussines} />
            <h3 className="company-name">{vacante.puesto}</h3>
          </div>
          <span className="company-category">{vacante.nombre}</span>
        </div>

        <div className="subHeader_Card-vacante">
          <div>
            <p className="datos_vacante">
              {" "}
              <img className="icon_Subheader" src={location} />{" "}
              {vacante.ciudadTrabajo}
            </p>
            <p className="datos_vacante">
              {" "}
              <img className="icon_Subheader" src={paid} />{" "}
              {`$${vacante.salarioMin} - $${vacante.salarioMax}`}
            </p>
          </div>

          <p className="datos_vacante">
            {" "}
            <img className="icon_Subheader" src={calendar} /> {fechaFormateada}
          </p>
        </div>

        <div className="body_Card-vacante">
          <p className="body_Descripcion">{vacante.descripcion}</p>
        </div>

        <div className="body_Card-skills">
          <p className="body_Habilidades">
            {vacante.habilidades?.map((habilidad) => (
              <span key={habilidad} className="habilidad">
                {habilidad}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

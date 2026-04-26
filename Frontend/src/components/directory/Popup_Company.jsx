import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import logoCompany from "../../assets/react.svg";
import open from "../../assets/icons/open.svg";
import map from "../../assets/images/google-maps.jpg";
import pin from "../../assets/icons/location.svg";
import phone from "../../assets/icons/call.svg";
import email from "../../assets/icons/mail.svg";
import calendar from "../../assets/icons/calendar.svg";
import web from "../../assets/icons/web.svg";

export default function Popup_Company({ onClose, empresa }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Bloquear scroll al abrir
    document.body.style.overflow = "hidden";

    // Restaurar scroll al cerrar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!empresa) return null;
  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup_Container">
        <div className="popup_Header">
          <img className="logo_Company" src={logoCompany} />
          <div className="company_Title">
            <h2 className="company_Name">{empresa.nombre}</h2>
            <p className="company_Area">{empresa.industria}</p>
          </div>

          <button
            className="go_Perfil"
            onClick={() => navigate(`/empresa/${empresa.id}`)}
          >
            <img className="open" src={open} /> Ir al Perfil
          </button>
        </div>

        <div className="container_Body">
          <div className="info_Container">
            <h2 className="title_body">Informacion de la empresa</h2>
            <p>{empresa.about || ""}</p>
            <div className="container_data">
              <p>
                {" "}
                <img className="image_pin" src={pin} /> {empresa.direccion}
              </p>
              <p>
                {" "}
                <img className="image_pin" src={phone} /> {empresa.telefono}
              </p>
              <p>
                <img className="image_pin" src={email} />
                {empresa.email}
              </p>
              <p>
                <img className="image_pin" src={calendar} />
                {empresa.horario}
              </p>
              <p>
                <img className="image_pin" src={web} />
                {empresa.website}
              </p>
            </div>
          </div>

          <div className="ubicacion_Container">
            <h2 className="ubicacion_Container title">Ubicacion</h2>
            <img className="ubicacionContainer imagen_Map" src={map} />
          </div>
        </div>
      </div>
    </>
  );
}

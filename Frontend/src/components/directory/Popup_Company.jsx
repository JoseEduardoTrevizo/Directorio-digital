import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Mapa from "../../utils/Mapa";
import logoCompany from "../../assets/images/logotipo.png";
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
          <div className="content-Header">
            <img
              className="logo_Company"
              src={empresa.picture_perfil || logoCompany}
            />
            <div className="company_Title">
              <h2 className="company_Name">{empresa.nombre}</h2>
              <p className="company_Area">{empresa.industria}</p>
            </div>
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
            <p>
              {empresa.about || "'Informacion de la empresa no disponible'"}
            </p>
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
              {empresa.horario && (
                <p>
                  <img className="image_pin" src={calendar} />
                  {empresa.horario}
                </p>
              )}
              {empresa.website && (
                <p>
                  <img className="image_pin" src={web} />
                  <a
                    className="linkWeb"
                    href={empresa.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {empresa.website}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="ubicacion_Container">
            <h2 className="ubicacion_Container-Title">Ubicacion</h2>
            <Mapa
              lat={empresa.latitud}
              lng={empresa.longitud}
              nombre={empresa.nombre}
            />
          </div>
        </div>
      </div>
    </>
  );
}

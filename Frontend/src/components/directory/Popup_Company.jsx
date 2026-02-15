import React from "react";
import logoCompany from "../../assets/react.svg";
import open from "../../assets/icons/open.svg";
import map from "../../assets/images/google-maps.jpg";
import pin from "../../assets/icons/location.svg";
import phone from "../../assets/icons/call.svg";
import email from "../../assets/icons/mail.svg";
import calendar from "../../assets/icons/calendar.svg";
import web from "../../assets/icons/web.svg";
import { useEffect } from "react";

export default function Popup_Company({ onClose }) {
  useEffect(() => {
    // Bloquear scroll al abrir
    document.body.style.overflow = "hidden";

    // Restaurar scroll al cerrar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup_Container">
        <div className="popup_Header">
          <img className="logo_Company" src={logoCompany} />
          <div className="company_Title">
            <h2 className="company_Name">AgroTech Solutions</h2>
            <p className="company_Area">Agricola</p>
          </div>

          <button className="go_Perfil">
            <img className="open" src={open} /> Ir al Perfil
          </button>
        </div>

        <div className="container_Body">
          <div className="info_Container">
            <h2 className="title_body">Informacion de la empresa</h2>
            <p>
              Empresa líder en soluciones tecnológicas para el sector agrícola,
              especializada en sistemas de riego automatizado y monitoreo de
              cultivos.
            </p>
            <div className="container_data">
              <p>
                {" "}
                <img className="image_pin" src={pin} /> Av. Reforma 123, Ciudad
                de México
              </p>
              <p>
                {" "}
                <img className="image_pin" src={phone} /> +52 55 1234-5678
              </p>
              <p>
                <img className="image_pin" src={email} />
                contacto@agrotech.com.mx
              </p>
              <p>
                <img className="image_pin" src={calendar} />
                Lunes a Viernes: 8:00 AM - 6:00 PM
              </p>
              <p>
                <img className="image_pin" src={web} />
                www.agrotech.com.mx
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

import React from "react";
import defaults from "../../assets/images/logotipo.png";
import mail from "../../assets/icons/mail.svg";
import telefono from "../../assets/icons/call.svg";
import direccion from "../../assets/icons/location.svg";

export default function Companies_list({ onClick, empresa }) {
  return (
    <main className="companies-list">
      <div className="company-card" onClick={onClick}>
        <div className="company-info">
          <div className="logo-placeholder">
            {
              <img
                className="logo"
                src={empresa.picture_perfil || defaults}
                alt="Logo"
              />
            }
          </div>
          <div className="container_Title-card">
            <h3 className="company-name">{empresa.nombre}</h3>
            <span className="company-category">{empresa.sector}</span>
          </div>
        </div>
        <div className="company-details">
          <div className="detail-item">
            <span className="detail-icon">
              {
                <img
                  src={direccion}
                  alt="point"
                  className="icon-cardDirectorio"
                />
              }
            </span>
            <span className="detail-text">{empresa.direccion}</span>
          </div>
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-icon">
                {
                  <img
                    src={telefono}
                    alt="telefono"
                    className="icon-cardDirectorio"
                  />
                }
              </span>
              <span className="detail-text"> {empresa.telefono}</span>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-icon">
                {
                  <img
                    src={mail}
                    alt="correo"
                    className="icon-cardDirectorio"
                  />
                }
              </span>
              <span className="detail-text"> {empresa.email}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

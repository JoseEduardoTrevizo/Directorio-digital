import React from "react";
import iconCv from "../../assets/icons/upload_cv.svg";
import iconForm from "../../assets/icons/formulario.svg";

export default function Popup_metodo({ onClose, onFormulario, onCV, vacante }) {
  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup-Metodo">
        <button className="btn_closeMetodo" onClick={onClose}>
          ✕
        </button>
        <h3 className="metodo-title">Aplicar a {vacante?.puesto}</h3>
        <p className="metodo-subtitle">
          ¿Cómo deseas aplicar a esta posición en {vacante?.nombre}?
        </p>

        <div className="metodo-opciones">
          <button className="metodo-card" onClick={onFormulario}>
            <img src={iconForm} className="metodo-icon" alt="Formulario" />
            <strong>Llenar formulario</strong>
            <span className="metodo-desc">Comparte tus datos</span>
          </button>
          <button className="metodo-card" onClick={onCV}>
            <img src={iconCv} className="metodo-icon" alt="Subir CV" />
            <strong>Subir CV</strong>
            <span className="metodo-desc">Adjunta tu currículum</span>
          </button>
        </div>
      </div>
    </>
  );
}

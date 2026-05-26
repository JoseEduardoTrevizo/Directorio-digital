import React, { useState, useRef } from "react";
import iconCv from "../../assets/icons/upload_cv.svg";

export default function Popup_cv({ onClose, onBack, vacante }) {
  const [archivo, setArchivo] = useState(null);
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setArchivo(file);
  };

  const handleSubmit = () => {
    if (!archivo || !nombre || !numero)
      return alert("Completa todos los campos");

    onClose();
  };

  return (
    <>
      <div className="popup_Overlay" onClick={onClose}></div>
      <div className="popup-Metodo">
        <button className="btn_closeMetodo" onClick={onClose}>
          ✕
        </button>

        <div className="metodo-header">
          <button className="btn_backMetodo" onClick={onBack}>
            ←
          </button>
          <div>
            <h3 className="metodo-title">Aplicar a {vacante?.puesto}</h3>
            <p className="metodo-subtitleCv">
              Sube tu CV para aplicar en {vacante?.nombre}
            </p>
          </div>
        </div>

        <p className="cv-label">CV/Curriculum</p>
        <div
          className={`cv-dropzone ${dragging ? "dragging" : ""}`}
          onClick={() => inputRef.current.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <img src={iconCv} className="cv-dropzone-icon" alt="Subir CV" />
          {archivo ? (
            <p className="cv-filename">{archivo.name}</p>
          ) : (
            <>
              <p className="cv-dropzone-text">
                Arrastra tu CV aquí o haz click para seleccionar
              </p>
              <span className="cv-dropzone-hint">
                PDF, DOC, DOCX (máx. 4MB)
              </span>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={(e) => setArchivo(e.target.files[0])}
          />
        </div>

        <p className="cv-label">Nombre de contacto</p>
        <input
          className="cv-email-input"
          type="text"
          placeholder="Tu nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p className="cv-label">Número de contacto</p>
        <input
          className="cv-email-input"
          type="text"
          placeholder="Tu número de teléfono"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <div className="cv-acciones">
          <button className="btn_cancelarCV" onClick={onBack}>
            Cancelar
          </button>
          <button className="btn_enviarCV" onClick={handleSubmit}>
            Enviar CV
          </button>
        </div>
      </div>
    </>
  );
}

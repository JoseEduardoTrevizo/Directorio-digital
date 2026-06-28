import React, { useState, useRef } from "react";
import iconCv from "../../assets/icons/upload_cv.svg";
import toast from "react-hot-toast";
import {
  enviarAplicacion,
  incrementarAplicaciones,
} from "../../services/aplicacionesService";

export default function Popup_cv({ onClose, onBack, vacante }) {
  const [archivo, setArchivo] = useState(null);
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  const TIPOS_PERMITIDOS = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setArchivo(file);
  };

  const handleSubmit = async () => {
    if (!archivo || !nombre || !numero || !email)
      return setError("Completa todos los campos");

    if (!TIPOS_PERMITIDOS.includes(archivo.type)) {
      return setError("Solo se aceptan archivos PDF, DOC o DOCX");
    }
    if (archivo.size > 4 * 1024 * 1024) {
      return setError("El archivo no debe superar 4MB");
    }

    setEnviando(true);
    setError("");

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("telefono", numero);
    formData.append("email", email);
    formData.append("cv", archivo);

    try {
      await enviarAplicacion(vacante.id, formData);

      incrementarAplicaciones(vacante.id).catch((err) =>
        console.error("Error al incrementar aplicaciones:", err),
      );

      toast.success("¡Aplicación enviada! Mucha suerte 🍀");
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
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
          required
          onChange={(e) => setNombre(e.target.value)}
        />

        <p className="cv-label">Número de contacto</p>
        <input
          className="cv-email-input"
          type="text"
          placeholder="Tu número de teléfono"
          value={numero}
          required
          onChange={(e) => setNumero(e.target.value)}
        />
        <p className="cv-label">Correo electrónico</p>
        <input
          className="cv-email-input"
          type="email"
          placeholder="tu@correo.com"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="cv-acciones">
          <button className="btn_cancelarCV" onClick={onBack}>
            Cancelar
          </button>
          <button
            className="btn_enviarCV"
            onClick={handleSubmit}
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar CV"}
          </button>
        </div>
      </div>
    </>
  );
}

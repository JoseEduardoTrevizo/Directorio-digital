import React, { useEffect, useState } from "react";
import {
  enviarAplicacion,
  incrementarAplicaciones,
} from "../../services/aplicacionesService";
import toast from "react-hot-toast";

export default function Popup_aplicar({ onClose, onBack, vacante }) {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    domicilio: "",
    telefono: "",
    sexo: "",
    fechaNacimiento: "",
    estadoCivil: "",
    email: "",
    escolaridad: "",
    tituloRecibido: "",
    idiomas: "",
    software: "",
    maquinas: "",
    otroTrabajos: "",
    empresa: "",
    puesto: "",
    descripcion: "",
    cv: null,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const requeridos = [
      "nombre",
      "apellido",
      "edad",
      "domicilio",
      "telefono",
      "sexo",
      "fechaNacimiento",
      "estadoCivil",
      "email",
      "escolaridad",
      "empresa",
      "puesto",
      "descripcion",
    ];
    const faltantes = requeridos.filter((campo) => !form[campo]);
    if (faltantes.length > 0) {
      return setError("Completa todos los campos obligatorios");
    }

    setEnviando(true);
    setError("");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "cv" && value) formData.append(key, value);
    });

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
      <div className="popup-Vacante">
        <div className="metodo-header">
          <button className="btn_backMetodo" onClick={onBack}>
            ←
          </button>
          <div>
            <h3 className="apply-title">Completa tu información</h3>
          </div>
        </div>

        <div className="body_Card-vacante">
          <p className="apply-subTitle">Datos personales</p>
          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="nombre"
              required
              placeholder="Nombre completo*"
              value={form.nombre}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="apellido"
              required
              placeholder="Apellido completo*"
              value={form.apellido}
              onChange={handleChange}
            />
            <input
              className="input_aplicar edad"
              type="number"
              name="edad"
              required
              placeholder="Edad*"
              value={form.edad}
              onChange={handleChange}
            />
          </div>

          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="domicilio"
              required
              placeholder="Domicilio*"
              value={form.domicilio}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="tel"
              name="telefono"
              required
              placeholder="Teléfono*"
              value={form.telefono}
              onChange={handleChange}
            />
            <input
              className="input_aplicar sexo"
              type="text"
              name="sexo"
              required
              placeholder="Sexo*"
              value={form.sexo}
              onChange={handleChange}
            />
          </div>

          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="fechaNacimiento"
              required
              placeholder="Fecha de nacimiento*"
              value={form.fechaNacimiento}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="estadoCivil"
              required
              placeholder="Estado civil*"
              value={form.estadoCivil}
              onChange={handleChange}
            />
          </div>

          <input
            className="input_aplicar"
            type="email"
            name="email"
            required
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />

          <p className="apply-subTitle">Escolaridad</p>

          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="escolaridad"
              required
              placeholder="Ultimo grado de estudios*"
              value={form.escolaridad}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="tituloRecibido"
              placeholder="Título recibido"
              value={form.tituloRecibido}
              onChange={handleChange}
            />
          </div>

          <p className="apply-subTitle">Conocimientos generales</p>

          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="idiomas"
              placeholder="Idiomas que dominas"
              value={form.idiomas}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="software"
              placeholder="Software que dominas"
              value={form.software}
              onChange={handleChange}
            />
          </div>
          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="maquinas"
              placeholder="Máquinas de oficina que operas"
              value={form.maquinas}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="otroTrabajos"
              placeholder="Otros trabajos o funciones realizados"
              value={form.otroTrabajos}
              onChange={handleChange}
            />
          </div>

          <p className="apply-subTitle">Empleo actual o anteriores</p>

          <div className="container_datosHeader">
            <input
              className="input_aplicar"
              type="text"
              name="empresa"
              required
              placeholder="Nombre de la empresa*"
              value={form.empresa}
              onChange={handleChange}
            />
            <input
              className="input_aplicar"
              type="text"
              name="puesto"
              required
              placeholder="Puesto*"
              value={form.puesto}
              onChange={handleChange}
            />
          </div>

          <div className="container_datosHeader">
            <textarea
              className="input_aplicar descripcion"
              name="descripcion"
              required
              placeholder="Actividades desempeñadas*"
              value={form.descripcion}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="btn_Aplicar"
          onClick={handleSubmit}
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Enviar solicitud"}
        </button>
      </div>
    </>
  );
}

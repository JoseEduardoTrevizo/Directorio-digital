import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  crearVacante,
  obtenerVacantesPorEmpresa,
  actualizarVacante,
} from "../services/vacantesService.js";
import TagInput from "./TagInput";

export default function Popup_nuevaVacante({
  empresaData,
  onClose,
  onSave,
  onVacanteCreada,
  vacanteInicial = null,
}) {
  const { userId, currentUser, updateCurrentUser, login } = useAuth();
  const idEmpresa = empresaData.id; // Asegúrate de que empresaData tenga un campo 'id'
  const [vacanteData, setVacanteData] = React.useState(null);
  const esEdicion = vacanteInicial !== null;
  const [formData, setFormData] = React.useState({
    puesto: vacanteInicial?.puesto ?? "",
    ciudad: vacanteInicial?.ciudad ?? "Cuauhtemoc, Chihuahua",
    salarioMinimo: vacanteInicial?.salarioMinimo ?? "",
    salarioMaximo: vacanteInicial?.salarioMaximo ?? "",
    descripcion: vacanteInicial?.descripcion ?? "",
    requisitos: vacanteInicial?.requisitos ?? "",
    habilidades: vacanteInicial?.habilidades ?? [],
    beneficios: vacanteInicial?.beneficios ?? "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (!empresaData) return;
    obtenerVacantesPorEmpresa(empresaData.id)
      .then((data) => {
        setVacanteData(data);
      })
      .catch(console.error);
  }, [empresaData]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (esEdicion) {
        await actualizarVacante(vacanteInicial.id, formData);
      } else {
        await crearVacante(idEmpresa, formData);
      }
      onVacanteCreada();
      onClose();
    } catch (error) {
      console.error("Error al guardar la vacante:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);

    setFormData({
      ...formData,
      [name]: capitalized,
    });
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h2 className="modal_title">
            {esEdicion ? "Editar vacante" : "Publicar nueva vacante"}
          </h2>
          <button className="modal_close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="modal_form" onSubmit={handleSubmit}>
          <div className="modal_grid">
            <div className="modal_field">
              <label>Nombre del puesto*</label>
              <input
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                placeholder={"Nombre del puesto"}
                required
              />
            </div>
            <div className="modal_field">
              <label>Ciudad*</label>
              <input
                name="ciudad"
                value={formData.ciudad}
                disabled={true}
                onChange={handleChange}
                placeholder={"Cuauhtemoc, Chihuahua"}
                required
              />
            </div>

            <div className="modal_field ">
              <label>Salario mínimo*</label>
              <input
                name="salarioMinimo"
                value={formData.salarioMinimo}
                onChange={handleChange}
                placeholder={"$15,000"}
                required
                type="number"
              />
            </div>
            <div className="modal_field ">
              <label>Salario máximo*</label>
              <input
                name="salarioMaximo"
                value={formData.salarioMaximo}
                onChange={handleChange}
                placeholder={"$20,000"}
                required
                type="number"
              />
            </div>
          </div>

          <h3 className="modal_section">Detalles</h3>

          <div className="modal_field">
            <label>Descripcion*</label>
            <textarea
              className="textArea_vacante"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder={"Descripción del puesto"}
              required
            />
          </div>
          <div className="modal_field">
            <label>Requisitos*</label>
            <textarea
              className="textArea_vacante"
              name="requisitos"
              value={formData.requisitos}
              onChange={handleChange}
              placeholder="Requisitos del puesto"
              required
            ></textarea>
          </div>
          <div className="modal_field">
            <label>Habilidades*</label>
            <TagInput
              value={formData.habilidades}
              onChange={(tags) =>
                setFormData({ ...formData, habilidades: tags })
              }
              placeholder="Ej: Trabajo en equipo, manejo de computadora, herramientas de diseño, etc."
            />
          </div>
          <div className="modal_field">
            <label>Loque ofrecemos*</label>
            <textarea
              className="textArea_vacante"
              name="beneficios"
              value={formData.beneficios}
              onChange={handleChange}
              placeholder="Seguro médico, vacaciones pagadas, etc."
              required
            ></textarea>
          </div>

          <div className="modal_actions">
            <button type="button" className="btn_cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn_guardar">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

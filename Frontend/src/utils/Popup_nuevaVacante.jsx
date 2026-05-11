import React, { useEffect } from "react";

export default function Popup_nuevaVacante({ onClose }) {
  const [formData, setFormData] = React.useState({
    puesto: "",
    ciudad: "Cuauhtemoc, Chihuahua",
    salarioMinimo: "",
    salarioMaximo: "",
    descripcion: "",
    requisitos: "",
    habilidades: "",
    beneficios: "",
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h2 className="modal_title">Publicar nueva vacante</h2>
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
            <textarea
              className="textArea_vacante"
              name="habilidades"
              value={formData.habilidades}
              onChange={handleChange}
              placeholder="Conocimientos o habilidades necesarias para el puesto"
              required
            ></textarea>
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

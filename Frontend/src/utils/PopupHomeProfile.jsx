import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import actualizarPerfilService from "../services/actualizarPerfilService";

export default function PopupHomeProfile({ onClose, onSave, empresa }) {
  const { userId, updateCurrentUser, login } = useAuth();
  const [formData, setFormData] = useState({
    about: empresa.about || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("id", userId);
    console.log("acerca de", formData.informacion);
    try {
      const respuesta = await actualizarPerfilService.actualizarAcercaDeEmpresa(
        userId,
        {
          about: formData.about,
        },
      );

      login(respuesta.token); // actualiza el token en el contexto
      updateCurrentUser(formData);
      onSave(formData); // actualiza el estado del padre
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al guardar los cambios");
    }
  };
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div
        className="modal_container modal_container--about"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_header">
          <h2 className="modal_title">Editar Información</h2>
          <button className="modal_close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="modal_form" onSubmit={handleSubmit}>
          <div className="modal_grid modal_grid--about">
            <div className="modal_field">
              <label>Acerca de</label>
              <textarea
                className="text_about"
                value={formData.about}
                name="about"
                maxLength={255}
                onChange={handleChange}
                placeholder={empresa.about || "Acerca de la empresa"}
              />
            </div>
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

import React, { useState, useEffect, useRef } from "react";
import actualizarPerfilService from "../services/actualizarPerfilService";
import { subirFotoPerfil } from "../services/imagenesService";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export default function PopupEditTittleProfile({ onClose, onSave, empresa }) {
  const [formData, setFormData] = useState({
    nombre: empresa.nombre || "",
    eslogan: empresa.eslogan || "",
  });
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(empresa.picture_perfil || null);
  const fileInputRef = useRef(null);
  const { userId, updateCurrentUser, login } = useAuth();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";

    // Preview local inmediato mientras sube
    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);

    setUploading(true);
    try {
      const { url } = await subirFotoPerfil(userId, file);
      // Reemplaza el preview local por la URL real de B2
      setPreviewUrl(url);
      onSave({ picture_perfil: url }); // notifica al padre para que actualice su estado
      toast.success("Foto de perfil actualizada");
    } catch (err) {
      // Revierte el preview si falló
      setPreviewUrl(empresa.picture_perfil || null);
      toast.error(err.message || "Error al subir la foto de perfil");
    } finally {
      setUploading(false);
      URL.revokeObjectURL(localPreview);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const respuesta =
        await actualizarPerfilService.actualizarEncabezadoEmpresa(userId, {
          nombre: formData.nombre,
          eslogan: formData.eslogan,
        });

      login(respuesta.token); // actualiza el token en el contexto
      updateCurrentUser(formData);
      onSave(formData); // actualiza el estado del padre
      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un error al guardar los cambios");
    }
  };
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h2 className="modal_title">Editar Información</h2>
          <button className="modal_close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="modal_form" onSubmit={handleSubmit}>
          <h3 className="modal_section">Contacto</h3>
          <div className="modal_grid">
            <div className="modal_field">
              <label>Nombre de la empresa</label>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder={empresa.nombre || "Nombre de la empresa"}
              />
            </div>

            <div className="modal_field modal_field--full">
              <label>Breve descripcion</label>
              <input
                name="eslogan"
                value={formData.eslogan}
                onChange={handleChange}
                placeholder={
                  empresa.eslogan || "Breve descripcion de la empresa"
                }
              />
            </div>
            <div className="modal_field">
              <label>Imagen del perfil</label>
              <div
                className="perfil_upload_area"
                onClick={() => !uploading && fileInputRef.current.click()}
                style={{ cursor: uploading ? "not-allowed" : "pointer" }}
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Foto de perfil"
                    className="perfil_preview"
                  />
                ) : (
                  <span className="perfil_placeholder">
                    {uploading ? "Subiendo..." : "Haz clic para subir foto"}
                  </span>
                )}
                {uploading && (
                  <span className="perfil_uploading_label">Subiendo...</span>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg, image/png, image/webp"
                onChange={handleImageChange}
                style={{ display: "none" }}
                disabled={uploading}
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

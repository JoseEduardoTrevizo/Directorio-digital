import React, { useEffect } from "react";

export default function PopupConfirm({
  openModal,
  onClose,
  confirmarDelete,
  puesto,
}) {
  if (!openModal) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div
        className="modal_container confirm_Delete"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal_titleDeletePopup">
          ¿Estás seguro de eliminar esta vacante?
        </h2>
        <h4 className="modal_titleDelete">"{puesto}"</h4>
        <div className="buttons_PopupConfirm">
          <button className="btn_cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn_confirmar" onClick={confirmarDelete}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

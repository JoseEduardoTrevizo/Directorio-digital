import React from "react";
import edit from "../assets/icons/edit2.svg";
import trash from "../assets/icons/delete.svg";
import location from "../assets/icons/location_on.svg";
import paper from "../assets/icons/paper.svg";
import eye from "../assets/icons/visibility.svg";
import { pausarVacante, activarVacante } from "../services/vacantesService";

export default function Card_vacantePublicada({
  vacante,
  openConfirmDelete,
  openEdit,
  actualizarVacantes,
}) {
  const fechaFormateada = new Date(vacante.update_at)
    .toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");

  const handlePausarVacante = async () => {
    try {
      await pausarVacante({ vacanteId: vacante.id, estatus: "Pausada" });
      // Actualizar la lista de vacantes después de pausar
      actualizarVacantes();
    } catch (error) {
      console.error("Error al pausar la vacante:", error);
    }
  };

  const handleActivarVacante = async () => {
    try {
      await activarVacante({ vacanteId: vacante.id, estatus: "Activa" });
      actualizarVacantes();
    } catch (error) {
      console.error("Error al activar la vacante:", error);
    }
  };

  return (
    <>
      <div className="content__card-vacante-publicada">
        <div className="content__card-vacante-publicada--header">
          <div className="container__header-icons">
            <label className="content__card-vacante-publicada--header-status">
              {vacante.estatus}
            </label>
            <p className="content__card-vacante-publicada--header-date">
              {fechaFormateada}
            </p>
          </div>

          <div className="container__header-icons">
            <img
              src={edit}
              alt="Editar vacante"
              className="icon_cardVacante"
              onClick={openEdit}
            />
            <img
              src={trash}
              alt="Eliminar vacante"
              className="icon_cardVacante"
              onClick={openConfirmDelete}
            />
          </div>
        </div>
        <div className="content__card-vacante-publicada--body">
          <h3 className="content__card-vacante-publicada--body-title">
            {vacante.puesto}
          </h3>
          <div className="content__card-vacante-publicada--body-header">
            <p className="content__card-vacante-publicada--body-ubication">
              <img
                className="icon_Ubicacion-vacante"
                src={location}
                alt="Ubicacion"
              />
              {vacante.ciudadTrabajo}
            </p>
            <p className="content__card-vacante-publicada--body-location">
              <strong>
                ${vacante.salarioMin} - ${vacante.salarioMax}
              </strong>
            </p>
          </div>

          <p className="content__card-vacante-publicada--body-location">
            {vacante.descripcion}
          </p>
          <div className="content__card-vacante-publicada--body-requisitos">
            <p className="content__card-vacante-publicada--body-location">
              <strong>Requisitos:</strong> {vacante.requisitos}
            </p>
            <p className="content__card-vacante-publicada--body-location">
              <strong>Beneficios:</strong> {vacante.beneficios}
            </p>
          </div>
          <div className="content__card-vacante-publicada--body-footer">
            <div className="content__card-vacante-publicada--body-footer-applicants">
              <h4 className="content__card-vacante-publicada--footer-location">
                <img className="icons_footerVacante" src={eye} alt="Vistas" />
                {vacante.vistas}
              </h4>
              <p className="content__card-vacante-publicada--footer-location">
                Vistas
              </p>
            </div>
            <div className="content__card-vacante-publicada--body-footer-applicants">
              <h4 className="content__card-vacante-publicada--footer-location">
                <img src={paper} alt="Aplicaciones" />
                {vacante.aplicaciones}
              </h4>
              <p className="content__card-vacante-publicada--footer-location">
                Aplicaciones
              </p>
            </div>
          </div>

          <button
            className="content__card-vacante-publicada--body-btn"
            onClick={
              vacante.estatus === "Activa"
                ? handlePausarVacante
                : handleActivarVacante
            }
          >
            {vacante.estatus === "Activa"
              ? "Pausar vacante"
              : "Reactivar vacante"}
          </button>
        </div>
      </div>
    </>
  );
}

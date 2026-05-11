import React from "react";
import edit from "../assets/icons/edit2.svg";
import trash from "../assets/icons/delete.svg";
import location from "../assets/icons/location_on.svg";
import paper from "../assets/icons/paper.svg";
import eye from "../assets/icons/visibility.svg";

export default function Card_vacantePublicada() {
  return (
    <>
      <div className="content__card-vacante-publicada">
        <div className="content__card-vacante-publicada--header">
          <div className="container__header-icons">
            <label className="content__card-vacante-publicada--header-status">
              Activa
            </label>
            <p className="content__card-vacante-publicada--header-date">
              Publicado el 10 may 2026
            </p>
          </div>

          <div className="container__header-icons">
            <img src={edit} alt="Editar vacante" className="icon_cardVacante" />
            <img
              src={trash}
              alt="Eliminar vacante"
              className="icon_cardVacante"
            />
          </div>
        </div>
        <div className="content__card-vacante-publicada--body">
          <h3 className="content__card-vacante-publicada--body-title">
            Desarrollador Frontend
          </h3>
          <div className="content__card-vacante-publicada--body-header">
            <p className="content__card-vacante-publicada--body-ubication">
              <img
                className="icon_Ubicacion-vacante"
                src={location}
                alt="Ubicacion"
              />
              Cuauhtemoc, Chihuahua
            </p>
            <p className="content__card-vacante-publicada--body-location">
              <strong>$20,000 - $30,000</strong>
            </p>
          </div>

          <p className="content__card-vacante-publicada--body-location">
            Experiencia mínima de 2 años en desarrollo frontend, conocimiento
            sólido de JavaScript, HTML y CSS. Experiencia mínima de 2 años en
            desarrollo frontend, conocimiento sólido de JavaScript, HTML y CSS.
          </p>
          <div className="content__card-vacante-publicada--body-requisitos">
            <p className="content__card-vacante-publicada--body-location">
              <strong>Habilidades:</strong> React, Redux, Git, trabajo en
              equipo. React, Redux, Git, trabajo en equipo. React, Redux, Git,
              trabajo en equipo.
            </p>
            <p className="content__card-vacante-publicada--body-location">
              <strong>Beneficios:</strong> Seguro médico, vacaciones pagadas,
              horario flexible. Seguro médico, vacaciones pagadas, horario
              flexible.
            </p>
          </div>
          <div className="content__card-vacante-publicada--body-footer">
            <div className="content__card-vacante-publicada--body-footer-applicants">
              <h4 className="content__card-vacante-publicada--footer-location">
                <img className="icons_footerVacante" src={eye} alt="Vistas" />5
              </h4>
              <p className="content__card-vacante-publicada--footer-location">
                Vistas
              </p>
            </div>
            <div className="content__card-vacante-publicada--body-footer-applicants">
              <h4 className="content__card-vacante-publicada--footer-location">
                <img src={paper} alt="Aplicaciones" />0
              </h4>
              <p className="content__card-vacante-publicada--footer-location">
                Aplicaciones
              </p>
            </div>
          </div>

          <button className="content__card-vacante-publicada--body-btn">
            Pausar
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";

import prudencia from "../assets/icons/brain.svg";
import justice from "../assets/icons/justice.svg";
import shield from "../assets/icons/shield.svg";
import compass from "../assets/icons/compass.svg";
import { NavLink } from "react-router-dom";
const rows = [
  { traditional: "Solo listado", nexus: "Ecosistema estructurado" },
  { traditional: "Publicación básica", nexus: "Posicionamiento estratégico" },
  {
    traditional: "Categorías saturadas",
    nexus: "Categorías organizadas y jerarquizadas",
  },
  {
    traditional: "Perfil mal estructurado",
    nexus: "Perfil estructurado y profesional",
  },
  {
    traditional: "Sin espacio publicitario",
    nexus: "Espacio publicitario disponible",
  },
  {
    traditional: "Poca visibilidad",
    nexus: "Enlaces dinámicos",
  },
  {
    traditional: "Sin publicacion de vacantes",
    nexus: "Publicación de vacantes",
  },
];
export default function Nosotros() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll(".scroll_reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="container_nosotros">
        <div className="hero_container">
          <div className="hero_grid_lines" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="hero_grid_line" />
            ))}
          </div>

          <div className="hero_glow hero_glow--left" aria-hidden="true" />
          <div className="hero_glow hero_glow--right" aria-hidden="true" />

          <div className="hero_content">
            <span className="hero_eyebrow">NEXUS</span>
            <h1 className="hero_title">
              La nueva puerta
              <br />
              del comercio.
            </h1>
            <p className="hero_subtitle">
              Conectamos empresas con visión, equilibrio y fortaleza en un
              ecosistema digital diseñado para crecer.
            </p>
            <div className="hero_actions">
              <button
                className="hero_btn hero_btn--primary"
                onClick={() =>
                  document
                    .getElementById("valores")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Conoce nuestro valores <span className="hero_btn_arrow">→</span>
              </button>
              <NavLink
                className="hero_btn hero_btn--secondary"
                to="/Directorio"
              >
                Explora el directorio
              </NavLink>
            </div>
          </div>
        </div>

        <section className="about_container scroll_reveal">
          <div className="content_about">
            <span className="about_eyebrow">QUIÉNES SOMOS</span>
            <h2 className="about_title">
              Más que un listado.
              <br />
              Un ecosistema.
            </h2>
            <div className="about_body">
              <p className="about_paragraph">
                NEXUS nace con una idea clara: el comercio necesita algo más que
                visibilidad. Necesita estructura. Necesita principios. Necesita{" "}
                <strong>conexión estratégica.</strong>
              </p>
              <p className="about_paragraph">
                No somos un simple directorio. Somos una plataforma diseñada
                para posicionar empresas dentro de un entorno{" "}
                <strong>organizado, confiable y preparado para escalar.</strong>
              </p>
              <p className="about_paragraph">
                Cada negocio que forma parte de NEXUS no solo aparece. Se
                integra a un sistema que{" "}
                <strong>impulsa su crecimiento.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="inspiration_container scroll_reveal" id="valores">
          <div className="content_inspiration">
            <span className="about_eyebrow inspiration-eyebrow">
              NUESTRA INSPIRACION
            </span>
            <h2 className="about_title inspiration-title">
              Inspirados en los valores que
              <br />
              sostienen el crecimiento
            </h2>
            <div className="inspiration_body">
              <div className="card_valores">
                <div className="content-icon_valores">
                  <img
                    src={prudencia}
                    alt="Prudencia"
                    className="icon_valores"
                  />
                </div>
                <h3 className="card_title">Prudencia</h3>
                <p className="card_paragraph">
                  Inteligencia para tomar decisiones estratégicas.
                </p>
              </div>
              <div className="card_valores">
                <div className="content-icon_valores">
                  <img src={justice} alt="Justicia" className="icon_valores" />
                </div>
                <h3 className="card_title">Justicia</h3>
                <p className="card_paragraph">
                  Transparencia y equilibrio en cada interacción.
                </p>
              </div>
              <div className="card_valores">
                <div className="content-icon_valores">
                  <img src={shield} alt="Fortaleza" className="icon_valores" />
                </div>
                <h3 className="card_title">Fortaleza</h3>
                <p className="card_paragraph">
                  Visibilidad y herramientas para competir.
                </p>
              </div>
              <div className="card_valores">
                <div className="content-icon_valores">
                  <img src={compass} alt="Templanza" className="icon_valores" />
                </div>
                <h3 className="card_title">Templanza</h3>
                <p className="card_paragraph">
                  Estabilidad y estructura para sostener el éxito.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mision_container scroll_reveal">
          <div className="mision_content">
            <div className="container_card-mision">
              <h3 className="about_eyebrow">NUESTRA MISION</h3>
              <h2 className="card_title card-mision">Mision</h2>
              <p className="card_paragraph paragraph-mision">
                Impulsar el comercio mediante una plataforma digital
                estructurada, confiable y diseñada para{" "}
                <strong>conectar valor.</strong>
              </p>
            </div>

            <div className="container_card-mision">
              <h3 className="about_eyebrow">NUESTRA VISION</h3>
              <h2 className="card_title card-mision">VISION</h2>
              <p className="card_paragraph paragraph-mision">
                Convertirnos en el punto de acceso digital para empresas que
                buscan <strong>crecer con principios y proyección.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="about_container scroll_reveal">
          <div className="content_about">
            <span className="about_eyebrow">QUE NOS HACE DIFERENTES</span>
            <h2 className="about_title">No somos el directorio de siempre.</h2>
            <div className="diferent_body">
              <div className="diferent_card">
                {/* Header */}
                <div className="diferent_header">
                  <div className="diferent_header_col diferent_header_col--traditional">
                    <span className="diferent_icon diferent_icon--bad">✕</span>
                    <span className="diferent_header_label">
                      Directorio tradicional
                    </span>
                  </div>
                  <div className="diferent_header_col diferent_header_col--nexum">
                    <span className="diferent_icon diferent_icon--good">✓</span>
                    <span className="diferent_header_label">NEXUS</span>
                  </div>
                </div>

                {/* Rows */}
                {rows.map((row, i) => (
                  <div className="diferent_row" key={i}>
                    <div className="diferent_cell diferent_cell--traditional">
                      <span className="diferent_icon diferent_icon--bad">
                        ✕
                      </span>
                      <span>{row.traditional}</span>
                    </div>
                    <div className="diferent_cell diferent_cell--nexum">
                      <span className="diferent_icon diferent_icon--good">
                        ✓
                      </span>
                      <span>{row.nexus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="join_container scroll_reveal">
          <div className="content_join">
            <span className="about_eyebrow join">ÚNETE A NEXUS</span>
            <h2 className="about_title join-title">
              Y forma parte de un ecosistema que impulsa el crecimiento
            </h2>
            <div className="about_body"></div>
            <NavLink className="hero_btn hero_btn--secondary" to="/registro">
              Unete a NEXUS <span className="join_btn_arrow">→</span>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
}

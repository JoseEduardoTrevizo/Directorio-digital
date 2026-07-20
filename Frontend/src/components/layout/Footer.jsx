import React from "react";
import { NavLink } from "react-router-dom";
import email from "../../assets/icons/mail.svg";
import telefono from "../../assets/icons/call.svg";
import locacion from "../../assets/icons/location.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_presentacion">
          <h2 className="title_footer">ENLACE LOCAL</h2>
          <p>
            La plataforma líder en búsqueda de empleo en México. Conectamos el
            mejor talento con las mejores oportunidades laborales.
          </p>
        </div>

        <div>
          <h2 className="title_footer">Links Rapidos</h2>
          <ul className="container_datosFooter">
            <NavLink
              to="/home"
              style={{
                color: "inherit",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/vacantes"
              style={{
                color: "inherit",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Vacantes
            </NavLink>
            <NavLink
              to="/directorio"
              style={{
                color: "inherit",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Directorio
            </NavLink>
            <NavLink
              to="/empresas"
              style={{
                color: "inherit",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Para Empresas
            </NavLink>
            <NavLink
              to="/nosotros"
              style={{
                color: "inherit",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Sobre Nosotros
            </NavLink>
          </ul>
        </div>

        <div>
          <h2 className="title_footer-contacto">Contacto</h2>
          <ul>
            <li className="datos">
              <img src={email} />
              Edwardo_tp@hotmail.com
            </li>
            <li className="datos">
              <img src={telefono} />
              614-222-8989
            </li>
            <li className="datos">
              <img src={locacion} />
              Cuauhtemoc, Chihuahua
            </li>
          </ul>
        </div>
      </div>
      <div className="container_piePagina">
        <p>Jose Eduardo Trevizo Pizano© 2025</p>

        <div className="container_politicas">
          <NavLink
            to="/politicas_de_privacidad"
            style={{
              color: "inherit",
              marginTop: "10px",
            }}
          >
            Políticas de Privacidad
          </NavLink>
          <NavLink
            to="/terminos_y_condiciones"
            style={{ color: "inherit", marginTop: "10px" }}
          >
            Términos y Condiciones
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

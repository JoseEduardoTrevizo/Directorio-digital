import React from "react";
import email from "../../assets/icons/mail.svg";
import telefono from "../../assets/icons/call.svg";
import locacion from "../../assets/icons/location.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_presentacion">
          <h2>EmpleoLink</h2>
          <p>
            La plataforma líder en búsqueda de empleo en México. Conectamos el
            mejor talento con las mejores oportunidades laborales.
          </p>
        </div>

        <div>
          <h2>Enlaces Rapidos</h2>
          <ul className="container_datosFooter">
            <li>Inicio</li>
            <li>Vacantes</li>
            <li>Directorio</li>
            <li>Para Empresas</li>
          </ul>
        </div>

        <div>
          <h2>Contacto</h2>
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
          <p>Politicas de Privacidad</p>
          <p>Terminos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
}

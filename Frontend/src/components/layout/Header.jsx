import React from "react";
import { NavLink } from "react-router-dom";
import login from "../../assets/icons/login.svg";
import logout from "../../assets/icons/user_add.svg";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header_title">Directorio Digital</h2>
      <nav className="navbar">
        <ul className="nav">
          <li>
            <NavLink to="/Home">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Vacantes">Vacantes</NavLink>
          </li>
          <li>
            <NavLink to="/Directorio">Directorio</NavLink>
          </li>
          <li>
            <NavLink to="/Empresas">ParaEmpresas</NavLink>
          </li>
        </ul>
      </nav>

      <div className="container_buttons">
        <button className="btn btn-login">
          <img src={login} alt="Login" className="login-icon" />
          Iniciar Sesion
        </button>

        <NavLink to="/Registro" className="btn btn-register">
          <img src={logout} alt="Logout" className="logout" />
          Registrate
        </NavLink>
      </div>
    </header>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import login from "../../assets/icons/login.svg";
import logout from "../../assets/icons/user_add.svg";

export default function Header() {
  return (
    <header className="header">
      <h2>Directorio Digital</h2>
      <nav className="navbar">
        <ul className="nav">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/">Vacantes</NavLink>
          </li>
          <li>
            <NavLink to="/">Directorio</NavLink>
          </li>
          <li>
            <NavLink to="/">ParaEmpresas</NavLink>
          </li>
        </ul>
      </nav>

      <div className="container_buttons">
        <button className="btn btn-login">
          <img src={login} alt="Login" className="login-icon" />
          Iniciar Sesion
        </button>

        <button className="btn btn-register">
          <img src={logout} alt="Logout" className="logout" />
          Registrate
        </button>
      </div>
    </header>
  );
}

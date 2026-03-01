import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import login from "../../assets/icons/login.svg";
import logout from "../../assets/icons/user_add.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/Home" || location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = !isHome
    ? "header header--scrolled"
    : `header ${scrolled ? "header--scrolled" : "header--transparent"}`;
  return (
    <header className={headerClass}>
      <h2 className="header_title">Nexum</h2>
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
          <li>
            <NavLink to="/Nosotros">Nosotros</NavLink>
          </li>
        </ul>
      </nav>

      <div className="container_buttons">
        <NavLink to="/Login" className="btn btn-login">
          <img src={login} alt="Login" className="login-icon" />
          Iniciar Sesion
        </NavLink>

        <NavLink to="/Registro" className="btn btn-register">
          <img src={logout} alt="Logout" className="logout" />
          Registrate
        </NavLink>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import enlace from "../../assets/images/enlace7.png";
import login from "../../assets/icons/login.svg";
import homeIcon from "../../assets/icons/homeIcon.svg";
import register from "../../assets/icons/user_add.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/Home" || location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu-container")) setMenuOpen(false);
      if (!e.target.closest(".header")) setMobileNavOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú mobile al navegar
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  const headerClass = !isHome
    ? "header header--scrolled"
    : `header ${scrolled ? "header--scrolled" : "header--transparent"} ${
        mobileNavOpen ? "header--menu-open" : ""
      }`;
  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className={headerClass}>
      {/* Logo */}
      <div className="header_title">
        <img src={enlace} alt="Enlace" className="logoEnlace" />
      </div>

      {/* Nav desktop */}
      <nav className={`navbar ${mobileNavOpen ? "navbar--open" : ""}`}>
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
            <NavLink to="/Empresas">Empresas</NavLink>
          </li>
          <li>
            <NavLink to="/Nosotros">Nosotros</NavLink>
          </li>
        </ul>
        {/* Botones solo visibles en mobile, dentro del drawer */}
        {!isLoggedIn && (
          <div className="nav-mobile-buttons">
            <NavLink to="/Login" className="btn btn-login">
              <img src={login} alt="" className="login-icon" />
              Iniciar Sesión
            </NavLink>
            <NavLink to="/Registro" className="btn btn-register">
              <img src={register} alt="" className="icon-register" />
              Regístrate
            </NavLink>
          </div>
        )}
      </nav>

      {/* Botones desktop */}
      <div className="container_buttons">
        {!isLoggedIn && (
          <NavLink to="/Login" className="btn btn-login btn--desktop-only">
            <img src={login} alt="" className="login-icon" />
            Iniciar Sesión
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink
            to="/Registro"
            className="btn btn-register btn--desktop-only"
          >
            <img src={register} alt="" className="icon-register" />
            Regístrate
          </NavLink>
        )}
        {isLoggedIn && (
          <div className="user-menu-container">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-logout"
            >
              <img src={homeIcon} alt="Menú usuario" className="menu-icon" />
            </button>
            {menuOpen && (
              <div className="user-menu-dropdown">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setMenuOpen(false);
                  }}
                >
                  Ver perfil
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}

        {/* Hamburguesa — solo visible en mobile */}
        <button
          className="btn-hamburger"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`hamburger-icon ${mobileNavOpen ? "hamburger-icon--open" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}

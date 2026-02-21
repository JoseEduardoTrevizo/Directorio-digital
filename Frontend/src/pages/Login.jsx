import React from "react";
import { NavLink } from "react-router";
import email from "../assets/icons/account.svg";
import lock from "../assets/icons/lock.svg";

export default function Login() {
  return (
    <>
      <main className="content_Login">
        <h1 className="login_Title">Iniciar Sesion en Directorio Digital</h1>

        <div className="container_Login">
          <h2 className="formulario_Title">Acceso al Portal</h2>

          <div className="formulario_Container">
            <div className="seccion_Info">
              <label className="formulario_label">Email</label>
              <div className="input-container">
                <img src={email} alt="" className="input-icon" />
                <input
                  className="input_Registro"
                  placeholder="Tu@empresa.com"
                ></input>
              </div>
            </div>

            <div className="seccion_Info">
              <label className="formulario_label">Contraseña</label>
              <div className="input-container">
                <img src={lock} alt="" className="input-icon" />
                <input className="input_Registro" placeholder="••••••••" />
              </div>
            </div>

            <div className="container_Check">
              <div className="check">
                <input type="checkbox" />
                <p className="text_Recordarme">Recordarme</p>
              </div>
              <NavLink className="link-to_Olvidaste" to="">
                ¿Olvidaste tu contraseña?
              </NavLink>
            </div>

            <NavLink to="/profile" className="btn btn-register-login">
              Iniciar Sesion
            </NavLink>

            <div className="footer_Login">
              <p className="formulario_label">
                ¿No tienes cuenta?{" "}
                <NavLink className="link-to_Register" to="/Registro">
                  Resgistrate aqui
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

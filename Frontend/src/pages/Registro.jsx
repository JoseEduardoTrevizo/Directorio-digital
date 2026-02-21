import React from "react";
import { NavLink } from "react-router-dom";
import name from "../assets/icons/account.svg";
import lock from "../assets/icons/lock.svg";
import company from "../assets/icons/apartment.svg";
import emailCorp from "../assets/icons/email.svg";

export default function Registro() {
  return (
    <>
      <div className="containerVacantes">
        <div className="container_Registro">
          <h1 className="registroTitle">Unete a EmpleoLink</h1>

          <div className="formulario">
            <h2 className="formulario_Title">Registra tu Empresa</h2>
            <h3 className="formulario_Subtitle">
              Registra tu empresa y accede al mejor talento con nuestros planes
            </h3>

            <div className="formulario_Container">
              <div className="seccion_Info">
                <label className="formulario_label">Nombre de la Empresa</label>
                <div className="input-container">
                  <img src={name} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="Tu Empresa "
                  ></input>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_label">Email Corporativo</label>
                <div className="input-container">
                  <img src={emailCorp} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="Email Corporativo"
                  ></input>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_label">Industria</label>
                <div className="input-container">
                  <img src={company} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="Selecciona tu Industria"
                  ></input>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_label">Contraseña</label>
                <div className="input-container">
                  <img src={lock} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="••••••••"
                  ></input>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_label">Confirmar Contraseña</label>
                <div className="input-container">
                  <img src={lock} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="••••••••"
                  ></input>
                </div>
              </div>
              <select className="plan-select">
                <option>Plan Básico - $4,999 MXN/año</option>
                <option>Plan Premium - $8,999 MXN/año</option>
                <option>Plan Enterprise - $15,999 MXN/año</option>
              </select>

              <NavLink to="" className="btn btn-register-paid">
                Registrate y procede al pago
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Registro() {
  return (
    <>
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
              <input className="input_Registro" placeholder="Nombre"></input>
            </div>

            <div className="seccion_Info">
              <label className="formulario_label">Email Corporativo</label>
              <input className="input_Registro" placeholder="Email"></input>
            </div>

            <div className="seccion_Info">
              <label className="formulario_label">Industria</label>
              <input
                className="input_Registro"
                placeholder="Selecciona tu Industria"
              ></input>
            </div>

            <div className="seccion_Info">
              <label className="formulario_label">Contraseña</label>
              <input
                className="input_Registro"
                placeholder="Contraseña"
              ></input>
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
    </>
  );
}

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { loginService } from "../services/authService";
import user from "../assets/icons/account.svg";
import lock from "../assets/icons/lock.svg";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  async function handleSubmit() {
    setGeneralError("");
    setFieldErrors({});
    setLoading(true);

    try {
      const { token } = await loginService(email, password);
      login(token);
      navigate("/profile");
    } catch (err) {
      if (err.validationErrors) {
        setFieldErrors(err.validationErrors);
      } else {
        setGeneralError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

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
                <img src={user} alt="" className="input-icon" />
                <input
                  className={`input_Registro ${fieldErrors.email ? "input-error" : ""}`}
                  placeholder="Tu@empresa.com"
                  type="email"
                  value={email}
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
                />
              </div>
            </div>

            <div className="seccion_Info">
              <label className="formulario_label">Contraseña</label>
              <div className="input-container">
                <img src={lock} alt="" className="input-icon" />
                <input
                  className="input_Registro"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
                />
              </div>
            </div>

            <div className="container_Check">
              <NavLink className="link-to_Olvidaste" to="">
                ¿Olvidaste tu contraseña?
              </NavLink>
            </div>

            {generalError && (
              <p className="general-error-text">{generalError}</p>
            )}

            {fieldErrors.password && (
              <p className="field-error-text">{fieldErrors.password}</p>
            )}

            {fieldErrors.email && (
              <p className="field-error-text">{fieldErrors.email}</p>
            )}
            <button
              className="btn btn-register-login"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Iniciando..." : "Iniciar Sesión"}
            </button>

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

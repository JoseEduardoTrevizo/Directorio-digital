import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DireccionAutocomplete from "../utils/DireccionAutocomplete";
import { registrarEmpresa } from "../services/registroServices.js";
import name from "../assets/icons/account.svg";
import lock from "../assets/icons/lock.svg";
import company from "../assets/icons/apartment.svg";
import emailCorp from "../assets/icons/email.svg";
import direccion from "../assets/icons/location_on.svg";
import telefono from "../assets/icons/call_2.svg";

export default function Registro() {
  const opciones = [
    { value: "Manufactura", label: "Manufactura" },
    { value: "Agricultura", label: "Agricultura y Agroindustria" },
    { value: "Construccion", label: "Construcción" },
    { value: "Tecnologia", label: "Tecnología y Software" },
    { value: "Salud", label: "Salud y Medicina" },
    { value: "Educacion", label: "Educación" },
    { value: "Transporte", label: "Transporte y Logística" },
    { value: "Comercio", label: "Comercio y Retail" },
    { value: "Alimentos", label: "Alimentos y Bebidas" },
    { value: "FinancieroS", label: "Servicios Financieros" },
    { value: "Turismo", label: "Turismo y Hospitalidad" },
    { value: "Energia", label: "Energía y Utilities" },
    { value: "Otro", label: "Otro" },
  ];
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    cp: "",
    lat: null,
    lng: null,
    telefono: "",
    industria: "",
    contraseña: "",
    confirmarContraseña: "",
    planId: "1", // ID del plan en tu BD
  });

  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación de contraseñas en el frontend
    if (formData.contraseña !== formData.confirmarContraseña) {
      return setError("Las contraseñas no coinciden");
    }
    if (formData.contraseña.length < 8) {
      return setError("La contraseña debe tener al menos 8 caracteres");
    }

    try {
      setCargando(true);
      await registrarEmpresa(formData);
      formData.contraseña = "";
      formData.confirmarContraseña = "";
      formData.industria = "";
      formData.nombre = "";
      formData.email = "";
      formData.direccion = "";
      formData.cp = "";
      formData.lat = null;
      formData.lng = null;
      formData.telefono = "";
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      // navigate("/pago"); // Redirige al pago tras registro exitoso
    } catch (err) {
      if (err.type === "NETWORK_ERROR") {
        setError("⚠️ " + err.message);
      } else if (err.type === "VALIDATION_ERROR") {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado. Intenta de nuevo.");
      }
    } finally {
      setCargando(false);
    }
  };

  const planes = {
    1: {
      nombre: "Plan Básico",
      precio: "$199 MXN/mes",
      features: [
        "Perfil en el directorio",
        "Información de contacto",
        "1 Imagen para mostrar",
        "Integración a Maps",
      ],
    },
    2: {
      nombre: "Plan PRO",
      precio: "$449 MXN/mes",
      features: [
        "Todo lo del Plan Básico +",
        "5 Imágenes para mostrar",
        "2 Vacantes simultáneas",
        "Aparicion en carrousel (rotacion media)",
        "Estadísticas básicas de búsquedas",
      ],
    },
    3: {
      nombre: "Plan Premium",
      precio: "$899 MXN/mes",
      features: [
        "Todo de los Planes +",
        "Carrousel destacado (rotación alta)",
        "Vacantes ilimitadas",
        "Multiples sucursales / ubicaciones",
        "Estadísticas avanzadas",
        "Perfil top en directorio",
      ],
    },
  };
  const handleDireccionSelect = ({ direccion, lat, lng }) => {
    setFormData((prev) => ({
      ...prev,
      direccion,
      lat,
      lng,
    }));
  };
  return (
    <>
      <div className="containerVacantes">
        <div className="container_Registro">
          <h1 className="registroTitle">Unete a Enlace Local</h1>

          <div className="formulario">
            <h2 className="formulario_Title">Registra tu Empresa</h2>
            <h3 className="formulario_Subtitle">
              Registra tu empresa y accede al mejor talento con nuestros planes
            </h3>

            <form className="formulario_Container" onSubmit={handleSubmit}>
              {error && <p className="formulario_error">{error}</p>}
              <div className="seccion_Info">
                <label className="formulario_labelRegistro">
                  Nombre de la Empresa
                </label>
                <div className="input-container">
                  <img src={name} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="Tu Empresa "
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">
                  Email Corporativo
                </label>
                <div className="input-container">
                  <img src={emailCorp} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="Email Corporativo"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="seccion_Info container_direccion_cp">
                <div className="content_direccion">
                  <label className="formulario_labelRegistro">Direccion</label>

                  <DireccionAutocomplete onSelect={handleDireccionSelect} />

                  {/* Muestra la dirección seleccionada */}
                  {formData.direccion && (
                    <p style={{ fontSize: 12, color: "black", marginTop: 4 }}>
                      📍 {formData.direccion}
                    </p>
                  )}
                </div>

                <div className="content_cp">
                  <label className="formulario_labelRegistro">
                    Codigo Postal
                  </label>
                  <div className="input-container">
                    <input
                      className="input_cp"
                      placeholder="62500"
                      name="cp"
                      value={formData.cp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">Telefono</label>
                <div className="input-container">
                  <img src={telefono} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="625-123-45-67"
                    name="telefono"
                    min={10}
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">Industria</label>
                <div className="input-container">
                  <img src={company} alt="" className="input-icon" />
                  <Select
                    options={opciones}
                    placeholder="Selecciona tu Industria"
                    classNamePrefix="select"
                    onChange={(selected) =>
                      setFormData({ ...formData, industria: selected.value })
                    }
                  />
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">Contraseña</label>
                <div className="input-container">
                  <img src={lock} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="••••••••"
                    type="password"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">
                  Confirmar Contraseña
                </label>
                <div className="input-container">
                  <img src={lock} alt="" className="input-icon" />
                  <input
                    className="input_Registro"
                    placeholder="••••••••"
                    type="password"
                    name="confirmarContraseña"
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <select
                className="plan-select"
                name="planId"
                value={formData.planId}
                onChange={handleChange}
              >
                <option value="1">Plan Básico - $349</option>
                <option value="2">Plan PRO - $699</option>
                <option value="3">Plan Premium - $949</option>
              </select>

              <div className="resumPlan">
                <h3 className="resumPlan_title">
                  Resumen del Plan Seleccionado:
                </h3>
                <p className="resumPlan_precio">
                  {planes[formData.planId].nombre} —{" "}
                  {planes[formData.planId].precio}
                </p>
                <ul className="resumPlan_list">
                  {planes[formData.planId].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className="btn btn-register-paid"
                disabled={cargando}
              >
                {cargando ? "Registrando..." : "Registrate y procede al pago"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

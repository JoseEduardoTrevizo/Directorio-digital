import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import DireccionAutocomplete from "../utils/DireccionAutocomplete";
import {
  registrarEmpresa,
  obtenerSectores,
  obtenerSubsectores,
} from "../services/registroServices.js";
import name from "../assets/icons/account.svg";
import lock from "../assets/icons/lock.svg";
import company from "../assets/icons/apartment.svg";
import emailCorp from "../assets/icons/email.svg";
import direccion from "../assets/icons/location_on.svg";
import telefono from "../assets/icons/call_2.svg";

export default function Registro() {
  const [sectores, setSectores] = useState([]);
  const [subsectores, setSubsectores] = useState([]);
  const [sectorSeleccionado, setSectorSeleccionado] = useState(null);
  const [cargandoSubsectores, setCargandoSubsectores] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    lat: null,
    lng: null,
    telefono: "",
    subsectorId: "",
    contraseña: "",
    confirmarContraseña: "",
    planId: "1", // ID del plan en tu BD
  });

  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargarSectores();
  }, []);

  const cargarSectores = async () => {
    try {
      const data = await obtenerSectores();
      setSectores(data.map((s) => ({ value: s.id, label: s.nombre })));
    } catch (err) {
      setError("No se pudieron cargar los sectores. Recarga la página.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.subsectorId) {
      return setError("Selecciona un sector y subsector para tu empresa");
    }

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
      formData.subsectorId = "";
      formData.nombre = "";
      formData.email = "";
      formData.direccion = "";
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

  const handleSectorChange = async (selected) => {
    setSectorSeleccionado(selected);
    setFormData((prev) => ({ ...prev, subsectorId: "" })); // resetea subsector al cambiar sector
    setSubsectores([]);

    if (!selected) return;

    try {
      setCargandoSubsectores(true);
      const data = await obtenerSubsectores(selected.value);
      setSubsectores(data.map((s) => ({ value: s.id, label: s.nombre })));
    } catch (err) {
      setError("No se pudieron cargar los subsectores.");
    } finally {
      setCargandoSubsectores(false);
    }
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

              <div className="seccion_Info">
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
                <label className="formulario_labelRegistro">Sector</label>
                <div className="input-container">
                  <img src={company} alt="" className="input-icon" />
                  <Select
                    options={sectores}
                    placeholder="Selecciona tu sector"
                    classNamePrefix="select"
                    value={sectorSeleccionado}
                    onChange={handleSectorChange}
                  />
                </div>
              </div>

              <div className="seccion_Info">
                <label className="formulario_labelRegistro">Subsector</label>
                <div className="input-container">
                  <img src={company} alt="" className="input-icon" />
                  <Select
                    options={subsectores}
                    placeholder={
                      cargandoSubsectores
                        ? "Cargando..."
                        : "Selecciona tu subsector"
                    }
                    classNamePrefix="select"
                    isDisabled={!sectorSeleccionado || cargandoSubsectores}
                    value={
                      subsectores.find(
                        (s) => s.value === formData.subsectorId,
                      ) || null
                    }
                    onChange={(selected) =>
                      setFormData({ ...formData, subsectorId: selected.value })
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

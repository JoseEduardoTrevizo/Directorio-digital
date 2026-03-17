import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import actualizarPerfilService from "../services/actualizarPerfilService";

export default function PopupEditProfiel({ empresa, onClose, onSave }) {
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    email: empresa.email || "",
    telefono: empresa.telefono || "",
    web: empresa.web || "",
    sector: empresa.sector || "",
    tamano: empresa.tamano || "",
    horario: empresa.horario || "",
    ubicacion: empresa.ubicacion || "",
    direccion: empresa.direccion || "",
  });
  const [turnos, setTurnos] = useState(
    empresa.horario
      ? [{ dias: "Lunes a Viernes", inicio: "9:00 AM", fin: "6:00 PM" }]
      : [{ dias: "Lunes a Viernes", inicio: "9:00 AM", fin: "6:00 PM" }],
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Token:", localStorage.getItem("token"));
    try {
      await actualizarPerfilService.actualizarEmpresa(userId, {
        email: formData.email,
        telefono: formData.telefono,
        website: formData.web,
        industria: formData.sector,
        tamano_empresa: formData.tamano,
        horario: formData.horario,
        ciudad: formData.ubicacion,
        direccion: formData.direccion,
      });

      onSave(formData); // actualiza el estado del padre
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al guardar los cambios");
    }
  };
  const handleTurno = (index, field, value) => {
    const nuevos = turnos.map((t, i) =>
      i === index ? { ...t, [field]: value } : t,
    );
    setTurnos(nuevos);
    // Arma el string para guardar en formData
    const horarioString = nuevos
      .map((t) => `${t.dias}: ${t.inicio} - ${t.fin}`)
      .join(" | ");
    setFormData({ ...formData, horario: horarioString });
  };

  const agregarTurno = () => {
    setTurnos([
      ...turnos,
      { dias: "Lunes a Viernes", inicio: "9:00 AM", fin: "6:00 PM" },
    ]);
  };

  const eliminarTurno = (index) => {
    if (turnos.length === 1) return; // mínimo 1 turno
    const nuevos = turnos.filter((_, i) => i !== index);
    setTurnos(nuevos);
    const horarioString = nuevos
      .map((t) => `${t.dias}: ${t.inicio} - ${t.fin}`)
      .join(" | ");
    setFormData({ ...formData, horario: horarioString });
  };
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h2 className="modal_title">Editar Información</h2>
          <button className="modal_close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="modal_form" onSubmit={handleSubmit}>
          <h3 className="modal_section">Contacto</h3>
          <div className="modal_grid">
            <div className="modal_field">
              <label>Correo electrónico</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={empresa.email || "correo@ejemplo.com"}
              />
            </div>
            <div className="modal_field">
              <label>Teléfono</label>
              <input
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder={empresa.telefono || "+52 614-000-0000"}
              />
            </div>
            <div className="modal_field modal_field--full">
              <label>Sitio web</label>
              <input
                name="web"
                value={formData.web}
                onChange={handleChange}
                placeholder={empresa.web || "https://"}
              />
            </div>
          </div>

          <h3 className="modal_section">Detalles</h3>
          <div className="modal_grid">
            <div className="modal_field">
              <label>Sector</label>
              <input
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                placeholder={empresa.sector || "Tecnología"}
              />
            </div>
            <div className="modal_field">
              <label>Tamaño de la empresa</label>
              <select
                name="tamano"
                value={formData.tamano}
                onChange={handleChange}
              >
                <option value="">Selecciona un rango</option>
                <option value="1 - 10 empleados">1 - 10 empleados</option>
                <option value="11 - 50 empleados">11 - 50 empleados</option>
                <option value="51 - 100 empleados">51 - 100 empleados</option>
                <option value="101 - 200 empleados">101 - 200 empleados</option>
                <option value="201 - 500 empleados">201 - 500 empleados</option>
                <option value="501 - 1000 empleados">
                  501 - 1000 empleados
                </option>
                <option value="Más de 1000 empleados">
                  Más de 1000 empleados
                </option>
              </select>
            </div>
            <div className="modal_field">
              <label>Horario de atención</label>
              <div className="turnos_container">
                {turnos.map((turno, index) => (
                  <div key={index} className="turno_row">
                    <select
                      value={turno.dias}
                      onChange={(e) =>
                        handleTurno(index, "dias", e.target.value)
                      }
                    >
                      <option>Lunes a Viernes</option>
                      <option>Lunes a Sábado</option>
                      <option>Lunes a Domingo</option>
                      <option>Fines de semana</option>
                      <option>Sábados</option>
                      <option>Domingos</option>
                      <option>Todos los días</option>
                    </select>

                    <select
                      value={turno.inicio}
                      onChange={(e) =>
                        handleTurno(index, "inicio", e.target.value)
                      }
                    >
                      {[
                        "6:00 AM",
                        "7:00 AM",
                        "8:00 AM",
                        "9:00 AM",
                        "10:00 AM",
                        "11:00 AM",
                        "12:00 PM",
                        "1:00 PM",
                        "2:00 PM",
                        "3:00 PM",
                        "4:00 PM",
                      ].map((h) => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>

                    <span className="turno_separador">—</span>

                    <select
                      value={turno.fin}
                      onChange={(e) =>
                        handleTurno(index, "fin", e.target.value)
                      }
                    >
                      {[
                        "12:00 PM",
                        "1:00 PM",
                        "2:00 PM",
                        "3:00 PM",
                        "4:00 PM",
                        "5:00 PM",
                        "6:00 PM",
                        "7:00 PM",
                        "8:00 PM",
                        "9:00 PM",
                        "10:00 PM",
                      ].map((h) => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>

                    <button
                      type="button"
                      className="turno_eliminar"
                      onClick={() => eliminarTurno(index)}
                      disabled={turnos.length === 1}
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="turno_agregar"
                  onClick={agregarTurno}
                >
                  + Agregar turno
                </button>
              </div>
            </div>
            <div className="modal_field">
              <label>Ubicación</label>
              <input
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                placeholder={empresa.ubicacion || "Ciudad, Estado"}
              />
            </div>
            <div className="modal_field modal_field--full">
              <label>Dirección completa</label>
              <input
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder={
                  empresa.direccion || "Av. Ejemplo 123, Col. Centro"
                }
              />
            </div>
          </div>

          <div className="modal_actions">
            <button type="button" className="btn_cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn_guardar">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

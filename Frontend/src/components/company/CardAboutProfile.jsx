import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/call.svg";
import web from "../../assets/icons/web.svg";
import map from "../../assets/images/google-maps.jpg";
import edit from "../../assets/icons/edit.svg";
import PopupEditProfiel from "../../utils/PopupEditProfiel";

export default function CardAboutProfile({ profileUserId }) {
  const { userId, currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [empresaData, setEmpresaData] = useState({
    email: currentUser.email || "",
    telefono: "+52 614-222-8989",
    web: "https://techsolutions.mx",
    sector: currentUser.industria || "",
    tamano: "0 - 50 empleados",
    horario: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    ubicacion: "Cuauhtemoc, Chihuahua",
    direccion: "Av. Reforma 222, Cuauhtémoc, CDMX",
  });

  console.log("userId (logueado):", userId); // debe ser null si no hay sesión
  console.log("profileUserId (prop):", profileUserId);
  console.log("¿Es el perfil del usuario logueado?", currentUser.email);

  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  return (
    <>
      <main className="container_About">
        <div className="container_Info">
          <div className="container-edit">
            <h2 className="titleCard_Profile">
              Informacion detallada de la empresa
            </h2>
            {isOwnProfile && (
              <img
                className="iconProfile edit"
                src={edit}
                alt="Edit"
                onClick={() => setModalOpen(true)}
                style={{ cursor: "pointer" }}
              />
            )}
            {modalOpen && (
              <PopupEditProfiel
                empresa={empresaData}
                onClose={() => setModalOpen(false)}
                onSave={(nuevaData) => setEmpresaData(nuevaData)}
              />
            )}
          </div>

          <div className="container_Contacto">
            <h3 className="subtitleCard_Profile">Contacto</h3>
            <p className="textCard_Profile">
              <img className="iconProfile" src={mail} alt="E-mail" />
              {currentUser.email}
            </p>
            <p className="textCard_Profile">
              <img className="iconProfile" src={phone} alt="Telefono" /> +52
              614-222-8989
            </p>
            <p className="textCard_Profile">
              <img className="iconProfile" src={web} alt="Web" />
              https://techsolutions.mx
            </p>
          </div>

          <div className="container_Conacto container-Sector">
            <div>
              <h3 className="subtitleCard_Profile">Sector</h3>
              <p className="textCard_Profile">{currentUser.industria || ""}</p>
              <h3 className="subtitleCard_Profile">Tamaño de la empresa</h3>
              <p className="textCard_Profile">0 - 50 empleados</p>
            </div>
            <div className="container_Sector-horario">
              <h3 className="subtitleCard_Profile">Horario de atención</h3>
              <p className="textCard_Profile">
                Lunes a Viernaes: 9:00 AM - 6:00 PM
              </p>
              <h3 className="subtitleCard_Profile">Ubicación</h3>
              <p className="textCard_Profile">Cuauhtemoc, Chihuahua</p>
            </div>
          </div>

          <div className="container_Contacto direccion">
            <h3 className="subtitleCard_Profile">Ubicacion en el mapa</h3>
            <div className="container_Map">
              <img
                className="map_Ubicacion"
                src={map}
                alt="Ubicacion en el mapa"
              />
            </div>
            <p className="textCard_Profile ">
              Av. Reforma 222, Cuauhtémoc, 06600 Ciudad de México, CDMX
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

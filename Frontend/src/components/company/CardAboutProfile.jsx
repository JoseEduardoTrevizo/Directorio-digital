import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/call.svg";
import web from "../../assets/icons/web.svg";
import map from "../../assets/images/google-maps.jpg";
import edit from "../../assets/icons/edit.svg";
import PopupEditProfiel from "../../utils/PopupEditProfiel";
import { obtenerEmpresaPorId } from "../../services/perfilPublicoService";
import Mapa from "../../utils/Mapa";

export default function CardAboutProfile({ profileUserId }) {
  const { userId, updateCurrentUser, currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [empresaData, setEmpresaData] = useState(null);

  useEffect(() => {
    if (!profileUserId) return;
    obtenerEmpresaPorId(profileUserId)
      .then((data) => {
        setEmpresaData(data);
      })
      .catch(console.error);
  }, [profileUserId]);
  if (!empresaData) return <p>Cargando...</p>;
  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  const handleSave = (nuevaData) => {
    setEmpresaData((prev) => {
      const siguiente = {
        ...prev,
        ...nuevaData,
        ciudad: nuevaData.ciudad ?? nuevaData.ubicacion ?? prev.ciudad,
        subsector: nuevaData.subsector ?? prev.subsector,
        sector: nuevaData.sector ?? prev.sector,
        direccion: nuevaData.direccion ?? prev.direccion,
        latitud: nuevaData.lat ?? prev.latitud,
        longitud: nuevaData.lng ?? prev.longitud,
        plan: prev.plan,
      };
      return siguiente;
    });

    updateCurrentUser({
      email: nuevaData.email,
      telefono: nuevaData.telefono,
      web_site: nuevaData.website,
      subsectorId: nuevaData.subsectorId,
      subsector: nuevaData.subsector,
      sector: nuevaData.sector,
      tamano_empresa: nuevaData.tamano_empresa,
      horario_atencion: nuevaData.horario,
      ciudad: nuevaData.ciudad ?? nuevaData.ubicacion,
      direccion: nuevaData.direccion,
      latitud: nuevaData.lat ?? currentUser?.latitud,
      longitud: nuevaData.lng ?? currentUser?.longitud,
      plan: currentUser?.plan,
    });
  };
  const url = empresaData.website?.startsWith("http")
    ? empresaData.website
    : `https://${empresaData.website}`;

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
                onSave={handleSave}
              />
            )}
          </div>

          <div className="container_Contacto">
            <h3 className="subtitleCard_Profile">Contacto</h3>
            <p className="textCard_Profile">
              <img className="iconProfile" src={mail} alt="E-mail" />
              {empresaData.email}
            </p>
            <p className="textCard_Profile">
              <img className="iconProfile" src={phone} alt="Telefono" />{" "}
              {empresaData.telefono || ""}
            </p>
            <p className="textCard_Profile">
              <img className="iconProfile" src={web} alt="Web" />
              {empresaData.website ? (
                <a
                  className="linkWeb"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {empresaData.website}
                </a>
              ) : (
                "Sin sitio web"
              )}
            </p>
          </div>

          <div className="container_Conacto container-Sector">
            <div>
              <h3 className="subtitleCard_Profile">Sector</h3>
              <p className="textCard_Profile">{empresaData.subsector || ""}</p>
              <h3 className="subtitleCard_Profile">Tamaño de la empresa</h3>
              <p className="textCard_Profile">
                {empresaData.tamano_empresa || "0"}
              </p>
              <h3 className="subtitleCard_Profile">Ubicación</h3>
              <p className="textCard_Profile">
                {empresaData.ciudad || "Cuauhtemoc, Chihuahua"}
              </p>
            </div>
            <div className="container_Sector-horario">
              <h3 className="subtitleCard_Profile">Horario de atención</h3>
              <p className="textCard_Profile">
                {empresaData.horario || "Lunes a Viernes"}
              </p>
              <h3 className="subtitleCard_Profile">Dirección</h3>
              <p className="textCard_Profile">{empresaData.direccion || ""}</p>
              {isOwnProfile && (
                <>
                  <h3 className="subtitleCard_Profile">Plan actual</h3>
                  <p className="textCard_Profile profile_plan">
                    {empresaData.plan || ""}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="container_Contacto direccion">
            <h3 className="subtitleCard_Profile">Ubicacion en el mapa</h3>
            <div className="container_Map">
              <Mapa
                lat={empresaData.latitud}
                lng={empresaData.longitud}
                nombre={empresaData.nombre}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

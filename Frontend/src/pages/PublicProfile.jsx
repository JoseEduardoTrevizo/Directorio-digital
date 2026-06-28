import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import portada from "../assets/images/cuauhtemoc.jpg";
import profile from "../assets/images/company-logo.jpg";
import edit from "../assets/icons/edit.svg";
import { obtenerEmpresaPorId } from "../services/perfilPublicoService";
import NavigationProfile from "../components/layout/NavigationProfile";

export default function PublicProfile() {
  const { id } = useParams();
  const { userId, currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("acerca");
  const [empresaData, setEmpresaData] = useState(null);
  const [modalTitleOpen, setModalTitleOpen] = useState(false);

  const profileUserId = currentUser?.id;
  const isOwnProfile =
    userId != null &&
    String(userId) === String(profileUserId) &&
    String(empresaData?.id) === String(profileUserId);

  const tabs = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca", label: "Acerca de" },
    ...(isOwnProfile ? [{ id: "empleos", label: "Vacantes" }] : []),
    ...(isOwnProfile ? [{ id: "configuracion", label: "Configuración" }] : []),
  ];
  useEffect(() => {
    obtenerEmpresaPorId(id)
      .then((data) => setEmpresaData(data))
      .catch(console.error);
  }, [id]);

  if (!empresaData) return <p>Cargando...</p>;

  return (
    <div className="profile-page">
      <div className="profile-page_Container">
        <div className="profile-header">
          <img className="profile-portada" src={portada} alt="Profile" />
          <div className="profile-header-content">
            <div className="profile-content">
              <div className="profile-contentTitle-picture">
                <img
                  className="profile-picture"
                  src={empresaData.picture_perfil}
                  alt="Profile"
                />
                <div className="profile-content-Header">
                  <h2 className="profile-name">{empresaData.nombre}</h2>
                  <p className="profile-bio">{empresaData.eslogan || ""}</p>
                </div>
              </div>
              {isOwnProfile && (
                <img
                  className="iconProfile edit-title"
                  src={edit}
                  alt="Edit"
                  onClick={() => setModalTitleOpen(true)}
                  style={{ cursor: "pointer" }}
                />
              )}
              {modalTitleOpen && (
                <PopupEditTittleProfile
                  empresa={empresaData}
                  onClose={() => setModalTitleOpen(false)}
                  onSave={handleSave}
                />
              )}
            </div>
          </div>
        </div>

        <div className="content_Container">
          <div className="nav-Profile">
            <ul className="nav-Profile-list">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`nav-Profile-item ${activeTab === tab.id ? "active" : ""}`}
                >
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_Content_Profile">
            {/* profileUserId=null para que no muestre botones de editar */}
            <NavigationProfile activeTab={activeTab} profileUserId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

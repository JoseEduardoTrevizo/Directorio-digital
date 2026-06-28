import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import portada from "../assets/images/cuauhtemoc.jpg";
import profile from "../assets/images/company-logo.jpg";
import edit from "../assets/icons/edit.svg";
import NavigationProfile from "../components/layout/NavigationProfile";
import PopupEditTittleProfile from "../utils/PopupEditTittleProfile";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("acerca");
  const { currentUser, userId, updateCurrentUser } = useAuth();
  const [empresaData, setEmpresaData] = useState(null);
  const [modalTitleOpen, setModalTitleOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const profileUserId = currentUser?.id;
  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  useEffect(() => {
    setActiveTab("acerca");
  }, [userId]);

  const tabs = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca", label: "Acerca de" },
    ...(isOwnProfile ? [{ id: "empleos", label: "Vacantes" }] : []),
    ...(isOwnProfile ? [{ id: "configuracion", label: "Configuración" }] : []),
  ];
  useEffect(() => {
    if (!profileUserId) return;
    fetch(`${API_URL}profile/empresa/${profileUserId}`)
      .then((res) => res.json())
      .then((data) => setEmpresaData(data))
      .catch(console.error);
  }, [profileUserId]);

  if (!currentUser)
    return (
      <div className="content__sinSesion">
        <p className="text-chargin">Debes iniciar sesión para ver tu perfil.</p>
      </div>
    );

  if (!empresaData)
    return (
      <div className="content__sinSesion">
        <p className="text-chargin">Cargando...</p>
      </div>
    );

  const handleSave = (nuevaData) => {
    setEmpresaData((prev) => ({ ...prev, ...nuevaData })); // actualiza el estado local
    updateCurrentUser({
      // actualiza el context
      nombreEmpresa: nuevaData.nombre,
      informacion: nuevaData.eslogan,
    });
  };
  return (
    <>
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
                    <h2 className="profile-name">{empresaData.nombre || ""}</h2>
                    <p className="profile-bio">
                      {empresaData.eslogan || "Breve descripcion de la empresa"}
                    </p>
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
              <NavigationProfile
                activeTab={activeTab}
                profileUserId={profileUserId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

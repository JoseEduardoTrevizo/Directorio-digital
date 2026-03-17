import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import portada from "../assets/images/cuauhtemoc.jpg";
import profile from "../assets/images/company-logo.jpg";
import NavigationProfile from "../components/layout/NavigationProfile";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("acerca");
  const { currentUser } = useAuth();

  const tabs = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca", label: "Acerca de" },
    { id: "empleos", label: "Empleos" },
  ];

  const profileUserId = currentUser?.id;
  return (
    <>
      <div className="profile-page">
        <div className="profile-page_Container">
          <div className="profile-header">
            <img className="profile-portada" src={portada} alt="Profile" />

            <div className="profile-content">
              <img className="profile-picture" src={profile} alt="Profile" />
              <div className="profile-content-Header">
                <h2 className="profile-name">{currentUser.nombre || ""}</h2>
                <p className="profile-bio">
                  Desarrollador web con 5 años de experiencia en creación de
                  aplicaciones modernas y responsivas.
                </p>
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

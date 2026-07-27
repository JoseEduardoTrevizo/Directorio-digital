import React from "react";
import InicioProfile from "./InicioProfile";
import AcercaDeProfile from "./AcercaDeProfile";
import EmpleosProfile from "./EmpleosProfile";
import ConfiguracionProfile from "./ConfiguracionProfile";
import { useAuth } from "../../contexts/AuthContext";

export default function NavigationProfile({
  activeTab = "acerca",
  profileUserId,
}) {
  const { userId, currentUser } = useAuth();
  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  return (
    <div className="container_NavigationProfile">
      <div style={{ display: activeTab === "inicio" ? "block" : "none" }}>
        <InicioProfile profileUserId={profileUserId} />
      </div>
      <div style={{ display: activeTab === "acerca" ? "block" : "none" }}>
        <AcercaDeProfile profileUserId={profileUserId} />
      </div>
      {isOwnProfile && activeTab === "empleos" && (
        <EmpleosProfile profileUserId={profileUserId} />
      )}
      {isOwnProfile && activeTab === "configuracion" && (
        <ConfiguracionProfile profileUserId={profileUserId} />
      )}
    </div>
  );
}

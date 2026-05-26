import React from "react";
import InicioProfile from "./InicioProfile";
import AcercaDeProfile from "./AcercaDeProfile";
import EmpleosProfile from "./EmpleosProfile";

export default function NavigationProfile({
  activeTab = "acerca",
  profileUserId,
}) {
  return (
    <div className="container_NavigationProfile">
      <div style={{ display: activeTab === "inicio" ? "block" : "none" }}>
        <InicioProfile profileUserId={profileUserId} />
      </div>
      <div style={{ display: activeTab === "acerca" ? "block" : "none" }}>
        <AcercaDeProfile profileUserId={profileUserId} />
      </div>
      <div style={{ display: activeTab === "empleos" ? "block" : "none" }}>
        <EmpleosProfile profileUserId={profileUserId} />
      </div>
    </div>
  );
}

import React from "react";
import InicioProfile from "./InicioProfile";
import AcercaDeProfile from "./AcercaDeProfile";
import EmpleosProfile from "./EmpleosProfile";

export default function NavigationProfile({
  activeTab = "acerca",
  profileUserId,
}) {
  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <InicioProfile profileUserId={profileUserId} />;
      case "acerca":
        return <AcercaDeProfile profileUserId={profileUserId} />;
      case "empleos":
        return <EmpleosProfile profileUserId={profileUserId} />;
      default:
        return <AcercaDeProfile profileUserId={profileUserId} />;
    }
  };

  return (
    <>
      <div className="container_NavigationProfile">{renderContent()}</div>
    </>
  );
}

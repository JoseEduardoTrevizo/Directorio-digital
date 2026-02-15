import React from "react";
import InicioProfile from "./InicioProfile";
import AcercaDeProfile from "./AcercaDeProfile";
import EmpleosProfile from "./EmpleosProfile";

export default function NavigationProfile({ activeTab = "acerca" }) {
  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return <InicioProfile />;
      case "acerca":
        return <AcercaDeProfile />;
      case "empleos":
        return <EmpleosProfile />;
      default:
        return <AcercaDeProfile />;
    }
  };

  return (
    <>
      <div className="container_NavigationProfile">{renderContent()}</div>
    </>
  );
}

import React from "react";
import Configuracion from "../company/Configuracion";

export default function ConfiguracionProfile({ profileUserId }) {
  return (
    <div>
      <Configuracion profileUserId={profileUserId} />
    </div>
  );
}

import React from "react";
import adds from "../../assets/adds/anuncio_bottom.webp";

export default function Aside_addsBottom() {
  return (
    <div className="adds_containerBottom">
      {/* Aquí van los anuncios */}
      <div className="add-placeholderBottom">
        <img
          //250x900
          className="add-sideBottom"
          src={adds}
          alt="Anuncio 1"
        />
      </div>
    </div>
  );
}

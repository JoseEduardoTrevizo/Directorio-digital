import React from "react";
import adds from "../../assets/adds/anuncios.webp";

export default function Aside_adds() {
  return (
    <div className="adds_container">
      {/* Aquí van los anuncios */}
      <div className="add-placeholder">
        <img
          //250x900
          className="add-rightside"
          src={adds}
          alt="Anuncio 1"
        />
      </div>
    </div>
  );
}

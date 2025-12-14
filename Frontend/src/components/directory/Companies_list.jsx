import React from "react";
import logo from "../../assets/react.svg";

export default function Companies_list() {
  return (
    <main className="companies-list">
      <div className="company-card">
        <div className="company-info">
          <span className="logo-placeholder">
            {<img className="logo" src={logo} alt="Logo" />}
          </span>
          <h3 className="company-name">Nombre de compañia</h3>
          <span className="company-category">categoria</span>
        </div>
        <div className="company-details">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span className="detail-text">direcciones</span>
          </div>
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-icon">👥</span>
              <span className="detail-text"> 50-100 empleados</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-text">Desde 1995</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";

export default function Empresas() {
  return (
    <>
      <div className="empresasTitle-container">
        <h1 className="empresasTitle">Soluciones para Empresas</h1>
        <h2 className="empresasSubtitle">
          Encuentra el talento que necesitas con nuestros planes diseñados para
          empresas de todos los tamaños
        </h2>
      </div>

      <h3 className="title_plans">Elige el Plan Perfecto para tu Empresa</h3>
      <div className="empresasPlans-container">
        <div className="plan-card">
          <h3 className="plan-title">Plan Básico</h3>
          <p className="plan-price"> $400 MXN/mes</p>
          <p className="planmas">Ideal para pequeñas empresas</p>
          <ul className="plan-features">
            <li className="feature">Perfil básico en el directorio</li>
            <li className="feature">Información de contacto</li>
            <li className="feature">Descripción breve (150-200 palabras)</li>
            <li className="feature">3-5 imágenes</li>
            <li className="feature">Enlace a sitio web</li>
            <li className="feature">Integración Google Maps</li>
          </ul>
          <button className="plan-button">Contratar Ahora</button>
        </div>

        <div className="plan-card-popular">
          <div class="popular-badge">MÁS POPULAR</div>
          <h3 className="plan-title">Plan Premium</h3>
          <p className="plan-price">900 MXN/mes</p>
          <p className="planmas">Todo lo del Plan Básico +</p>
          <ul className="plan-features">
            <li className="feature">Posicionamiento destacado</li>
            <li className="feature">
              Banner publicitario en página de inicio{" "}
            </li>
            <li className="feature">Descripción extendida (500 palabras)</li>
            <li className="feature">10-15 imágenes </li>
            <li className="feature">Badge "Empresa Destacada"</li>
            <li className="feature">Publicación de ofertas de empleo</li>
            <li className="feature">Diferentes ubicaciones</li>
          </ul>
          <button className="plan-button">Contratar Ahora</button>
        </div>
      </div>
    </>
  );
}

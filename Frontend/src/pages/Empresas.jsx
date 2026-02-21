import React from "react";

export default function Empresas() {
  return (
    <>
      <div className="containerVacantes">
        <div className="empresasTitle-container">
          <h1 className="empresasTitle">
            Soluciones para <span>Empresas</span>
          </h1>
          <h2 className="empresasSubtitle">
            Encuentra el talento que necesitas con nuestros planes diseñados
            para empresas de todos los tamaños
          </h2>
        </div>

        <h3 className="title_plans">Elige el Plan Perfecto para tu Empresa</h3>

        <div className="empresasPlans-container">
          <div className="plan-card">
            <h3 className="plan-title">Plan Básico</h3>
            <p className="plan-price"> $349 MXN/mes</p>
            <p className="planmas">Ideal para pequeñas empresas</p>
            <ul className="plan-features">
              <li className="feature">Perfil básico en el directorio</li>
              <li className="feature">Información de contacto</li>
              <li className="feature">Descripción breve (150-200 palabras)</li>
              <li className="feature">1-3 Imágenes</li>
              <li className="feature">Enlace a sitio web</li>

              <li className="feature">Integración Google Maps</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>

          <div className="plan-card">
            <h3 className="plan-title">Plan PRO</h3>
            <p className="plan-price"> $699 MXN/mes</p>
            <p className="planmas">Todo lo del Plan Basico +</p>
            <ul className="plan-features">
              <li className="feature">4–6 imágenes para mostrar</li>
              <li className="feature">1 Vacante al Mes</li>
              <li className="feature">Badge “Recomendado”</li>
              <li className="feature">Estadísticas básicas de búsquedas</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>

          <div className="plan-card-popular">
            <div class="popular-badge">MÁS POPULAR</div>
            <h3 className="plan-title">Plan Premium</h3>
            <p className="plan-price">$949 MXN/mes</p>
            <p className="planmas">Todo lo del Planes +</p>
            <ul className="plan-features">
              <li className="feature">
                Banner publicitario rotativo en página de inicio
              </li>
              <li className="feature">3 Vacante al Mes</li>
              <li className="feature">
                Posicionamiento destacado en su categoría
              </li>
              <li className="feature">Badge “Recomendado”</li>
              <li className="feature">Diferentes ubicaciones</li>
              <li className="feature">Estadísticas avanzadas</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>
        </div>
      </div>
    </>
  );
}

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
            <p className="plan-price"> $199 MXN/mes</p>
            <p className="planmas">Ideal para pequeñas empresas</p>
            <ul className="plan-features">
              <li className="feature">Perfil en el directorio</li>
              <li className="feature">Información de contacto</li>
              <li className="feature">Integración a maps</li>
              <li className="feature">1 Imágen en perfil</li>
              <li className="feature">Enlace a sitio web</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>

          <div className="plan-card">
            <h3 className="plan-title">Plan PRO</h3>
            <p className="plan-price"> $449 MXN/mes</p>
            <p className="planmas">Todo lo del Plan Basico +</p>
            <ul className="plan-features">
              <li className="feature">5 imágenes en perfil</li>
              <li className="feature">2 Vacantes simultáneas</li>
              <li className="feature">
                Aparición en carrusel (rotacion media)
              </li>
              <li className="feature">Estadísticas básicas de búsquedas</li>
              <li className="feature">Perfil destacado en directorio</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>

          <div className="plan-card-popular">
            <div className="popular-badge">MÁS POPULAR</div>
            <h3 className="plan-title">Plan Premium</h3>
            <p className="plan-price">$899 MXN/mes</p>
            <p className="planmas">Todo de los Planes +</p>
            <ul className="plan-features">
              <li className="feature">Carrusel destacado (rotación alta)</li>
              <li className="feature">Vacantes ilimitadas</li>
              <li className="feature">Badge "Recomendado"</li>
              <li className="feature">Multiples sucursales</li>
              <li className="feature">Estadísticas avanzadas</li>
              <li className="feature">Perfil top en directorio</li>
            </ul>
            <button className="plan-button">Contratar Ahora</button>
          </div>
        </div>
      </div>
    </>
  );
}

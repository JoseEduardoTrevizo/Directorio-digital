import React from "react";
import {
  Calendar,
  KeyRound,
  CreditCard,
  Crown,
  Trash2,
  ShieldAlert,
} from "lucide-react";
import trash from "../../assets/icons/delete.svg";
import lock from "../../assets/icons/lock.svg";

export default function Configuracion({ profileUserId }) {
  return (
    <div>
      <div className="content_headerConfig">
        <div className="container_headerConfig">
          <h2 className="header_configTitle">Configuración de la cuenta</h2>
          <p className="header_configSubtitle">
            Administra tu seguridad, suscripcion y metodo de pago.
          </p>
        </div>
        <div className="plan_headerConfig">
          <Crown className="icon_crown" />
          <h3 className="plan_titleCrown">Plan actual: PRO</h3>
        </div>
      </div>

      <div className="content_renovacionConfig">
        <div className="renovacion_bodyConfig">
          <div className="container_renovacion">
            <Calendar className="icon_calendar" />
            <div className="container_renovacionFecha">
              <h3 className="text_fechaConfig">Proxima renovación</h3>
              <p className="text_fechaConfig">15 Ene 2027</p>
            </div>
          </div>
        </div>
      </div>

      {/*Seccion de cambio de contraseña */}
      <div className="content_bodyConfig">
        <div className="container_cambiarPassword">
          <div className="content_titlePass">
            <KeyRound className="icon_lock" />
            <h3 className="subtitleConfig_cards">Cambiar contraseña</h3>
          </div>

          <label className="labelConfig" htmlFor="currentPassword">
            Contraseña actual
          </label>
          <input
            className="inputConfigPassword"
            type="password"
            id="currentPassword"
            placeholder="Ingresa tu contraseña actual"
          />
          <div className="contentNewpass">
            <div className="container_newPassword">
              <label className="labelConfig" htmlFor="newPassword">
                Nueva contraseña
              </label>
              <input
                className="inputConfigPassword"
                type="password"
                id="newPassword"
                placeholder="Ingresa tu nueva contraseña"
              />
            </div>
            <div className="container_newPassword">
              <label className="labelConfig" htmlFor="confirmPassword">
                Confirmar nueva contraseña
              </label>
              <input
                className="inputConfigPassword"
                type="password"
                id="confirmPassword"
                placeholder="Confirma tu nueva contraseña"
              />
            </div>
          </div>

          <label className="labelsugerencia" htmlFor="currentPassword">
            Usa 8 caracteres o más con una combinación de letras, números y
            símbolos.
          </label>
          <div className="container_btnConfirmPass">
            <button className="btn_newPassword">Actualizar Contraseña</button>
          </div>
        </div>

        {/*Seccion de cambio de tarjeta */}
        <div className="container_cambiarMetodoPago">
          <div className="content_titlePass">
            <CreditCard className="icon_lock" />
            <h3 className="subtitleConfig_cards">Actualizar método de pago</h3>
          </div>

          <div className="container_headerPayment">
            <div className="content_headerPayment">
              <p className="text_headerPaymentTitle">Tarjeta de crédito</p>
            </div>
            <div className="content_headerBody">
              <p className="text_headerPayment">
                <span>****</span>
                <span>****</span>
                <span>****</span>
                <span>1234</span>
              </p>
            </div>
            <div className="content_headerFooter">
              <p className="footer_payment">Intecno Solutions</p>
              <p className="footer_payment">Expira 12/25</p>
            </div>
          </div>

          <div className="container_bodyPayment">
            <label className="labelConfig" htmlFor="Titular">
              Titular
            </label>
            <input
              className="inputConfigPassword"
              type="text"
              id="Titular"
              placeholder="Ingresa el nombre del titular"
            />
            <label className="labelConfig" htmlFor="NumeroTarjeta">
              Numero de tarjeta
            </label>
            <input
              className="inputConfigPassword"
              type="number"
              id="NumeroTarjeta"
              placeholder="Ingresa el número de la tarjeta"
              min={16}
              max={16}
            />
            <div className="contentNewpass">
              <div className="container_newPassword">
                <label className="labelConfig" htmlFor="Vencimiento">
                  Vencimiento
                </label>
                <input
                  className="inputConfigPassword"
                  type="number"
                  id="Vencimiento"
                  placeholder="08/29"
                />
              </div>
              <div className="container_newPassword">
                <label className="labelConfig" htmlFor="confirmPassword">
                  CVV
                </label>
                <input
                  className="inputConfigPassword"
                  type="number"
                  id="cvv"
                  placeholder="123"
                  min={3}
                  max={3}
                />
              </div>
            </div>
            <div className="container_btnConfirmPass">
              <button className="btn_newPassword changePayment">
                Actualizar Método de Pago
              </button>
            </div>
          </div>
        </div>

        {/*Seccion de cambio de plan */}
        <div className="container_cambiarPlan">
          <h3 className="subtitleConfig_cards">Cambiar plan</h3>
          <div className="content_planes">
            <div className="plan-cardConfig">
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

            <div className="plan-cardConfig">
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

            <div className="plan-cardConfig-popular">
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
        {/*Zona de peligro */}
        <div className="container_dangerZone">
          <div className="container_titleDanger">
            <ShieldAlert className="icon_dangerZoneAlert" />
            <h3 className="subtitleConfig_dagerZone">Zona de peligro</h3>
          </div>

          <div className="content_dangerZone">
            <div className="content_textDanger">
              <h5 className="subtitle_dangerZone">Cancelar cuenta</h5>
              <p className="text_dangerZone">
                Al cancelar tu cuenta, perderás acceso a todos los servicios y
                datos asociados.
              </p>
            </div>
            <button className="btn_dangerZone">
              <Trash2 className="icon_dangerZone" />
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import hire from "../../assets/icons/edit.svg";
import business from "../../assets/icons/business_center.svg";
import { obtenerEmpresaPorId } from "../../services/perfilPublicoService";
import Popup_nuevaVacante from "../../utils/Popup_nuevaVacante";
import Card_vacantePublicada from "../../utils/Card_vacantePublicada";

export default function CardHireProfile({ profileUserId }) {
  const { userId } = useAuth();
  const [empresaData, setEmpresaData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!profileUserId) return;
    obtenerEmpresaPorId(profileUserId)
      .then((data) => setEmpresaData(data))
      .catch(console.error);
  }, [profileUserId]);

  if (!empresaData) return <p>Cargando...</p>;
  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  return (
    <>
      <main className="container_Hire">
        <div className="container_Info-hire">
          <h2 className="titleCard_Profile">Vacantes Publicadas</h2>
          {isOwnProfile && (
            <NavLink
              to=""
              className="btn-hire"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            >
              <img src={hire} alt="Logout" className="new_hire-icon" />
              Nueva Vacante
            </NavLink>
          )}
          {modalOpen && (
            <Popup_nuevaVacante onClose={() => setModalOpen(false)} />
          )}
        </div>

        <div className="container_Contacto-hire">
          <div className="container_no-vacancies">
            <img className="business-icon" src={business} alt="Business" />
            <p className="textCard_Profile">
              No tienes vacantes publicadas aún <br /> Comienza publicando tu
              primera vacante
            </p>
          </div>

          <Card_vacantePublicada />
        </div>
      </main>
    </>
  );
}

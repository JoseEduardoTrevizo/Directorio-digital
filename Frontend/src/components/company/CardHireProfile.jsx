import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import hire from "../../assets/icons/edit.svg";
import business from "../../assets/icons/business_center.svg";

export default function CardHireProfile({ profileUserId }) {
  const { userId } = useAuth();

  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  return (
    <>
      <main className="container_Hire">
        <div className="container_Info-hire">
          <h2 className="titleCard_Profile">Vacantes Publicadas</h2>
          {isOwnProfile && (
            <NavLink to="" className="btn-hire">
              <img src={hire} alt="Logout" className="new_hire-icon" />
              Nueva Vacante
            </NavLink>
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
        </div>
      </main>
    </>
  );
}

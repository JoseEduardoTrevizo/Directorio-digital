import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import hire from "../../assets/icons/edit.svg";
import business from "../../assets/icons/business_center.svg";
import { obtenerEmpresaPorId } from "../../services/perfilPublicoService";
import Popup_nuevaVacante from "../../utils/Popup_nuevaVacante";
import Card_vacantePublicada from "../../utils/Card_vacantePublicada";
import PopupConfirm from "../../utils/PopupConfirm";
import {
  obtenerVacantesPorEmpresa,
  eliminarVacante,
} from "../../services/vacantesService";

export default function CardHireProfile({ profileUserId }) {
  const { userId } = useAuth();
  const [empresaData, setEmpresaData] = useState(null);
  const [vacantesData, setVacantesData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [vacanteIdToDelete, setVacanteIdToDelete] = useState(null);
  const [vacanteToEdit, setVacanteToEdit] = useState(null);
  const [loadingVacantes, setLoadingVacantes] = useState(true);

  useEffect(() => {
    if (!profileUserId) return;
    obtenerEmpresaPorId(profileUserId)
      .then((data) => setEmpresaData(data))
      .catch(console.error);
  }, [profileUserId]);

  useEffect(() => {
    fetchVacantes();
  }, [profileUserId]);

  const fetchVacantes = () => {
    if (!profileUserId) return;
    setLoadingVacantes(true);

    const delay = new Promise((resolve) => setTimeout(resolve, 500));

    Promise.all([obtenerVacantesPorEmpresa(profileUserId), delay])
      .then(([data]) => setVacantesData(data))
      .catch(console.error)
      .finally(() => setLoadingVacantes(false));
  };

  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  const handleOpenModalDelete = (vacanteId) => {
    setVacanteIdToDelete(vacanteId);
    setModalDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await eliminarVacante(vacanteIdToDelete);
      setModalDeleteOpen(false);
      setVacanteIdToDelete(null);
      fetchVacantes(); // Actualiza la lista de vacantes después de eliminar
    } catch (error) {
      console.error("Error al eliminar la vacante:", error);
    }
  };

  const handleOpenModalEdit = (vacante) => {
    setVacanteToEdit(vacante);
    setModalOpen(true);
  };

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
            <Popup_nuevaVacante
              empresaData={empresaData}
              vacanteInicial={vacanteToEdit}
              onClose={() => {
                setModalOpen(false);
                setVacanteToEdit(null);
              }}
              onVacanteCreada={fetchVacantes} // pasa la función para actualizar las vacantes
            />
          )}
          {modalDeleteOpen && (
            <PopupConfirm
              openModal={modalDeleteOpen}
              onClose={() => setModalDeleteOpen(false)}
              confirmarDelete={() => handleConfirmDelete()}
              puesto={
                vacantesData?.vacantes?.find((v) => v.id === vacanteIdToDelete)
                  ?.puesto
              }
            />
          )}
        </div>

        <div className="container_Contacto-hire">
          {loadingVacantes ? (
            <div className="loading-state">
              <div className="spinner" />
            </div>
          ) : vacantesData?.vacantes?.length > 0 ? (
            vacantesData.vacantes.map((vacante) => (
              <Card_vacantePublicada
                key={vacante.id}
                vacante={vacante}
                openConfirmDelete={() => handleOpenModalDelete(vacante.id)}
                openEdit={() => handleOpenModalEdit(vacante)}
                actualizarVacantes={fetchVacantes}
              />
            ))
          ) : (
            <div className="container_no-vacancies">
              <img className="business-icon" src={business} alt="Business" />
              <p className="textCard_Profile">
                No tienes vacantes publicadas aún <br /> Comienza publicando tu
                primera vacante
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

import React, { useState, useEffect } from "react";
import directorioService from "../services/directorioService";
import Filter_directory from "../components/directory/Filter_directory";
import Companies_list from "../components/directory/Companies_list";
import Aside_adds from "../components/directory/Aside_adds";
import Aside_addsBottom from "../components/directory/Aside_addsBottom";
import Popup_Company from "../components/directory/Popup_Company";

export default function Directorio() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [empresas, setEmpresas] = useState(null);
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const data = await directorioService.obtenerEmpresas();
        setEmpresas(data);
        console.log("Empresas obtenidas:", data);
      } catch (error) {
        console.error("Error al cargar empresas:", error.message);
        setEmpresas([]); // Establecer un array vacío para evitar errores de renderizado
      }
    };

    fetchEmpresas();
  }, []);

  const handleOpenPopup = (empresa) => {
    setSelectedEmpresa(empresa);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedEmpresa(null);
  };

  if (empresas === null) return null;
  return (
    <>
      <div className="containerDirectorio">
        <h2 className="directory-title">Directorio de Empresas</h2>
        <div className="directory_container">
          <aside className="directory_sidebar">
            <Filter_directory />
          </aside>
          <main className="companies_list">
            {empresas.map((empresa) => (
              <Companies_list
                key={empresa.id}
                empresa={empresa}
                onClick={() => handleOpenPopup(empresa)}
              />
            ))}
          </main>
          <aside className="directory_ads">
            <Aside_adds />
          </aside>
          <aside className="adds_bottom">
            <Aside_addsBottom />
          </aside>
        </div>
      </div>

      {isPopupOpen && (
        <Popup_Company empresa={selectedEmpresa} onClose={handleClosePopup} />
      )}
    </>
  );
}

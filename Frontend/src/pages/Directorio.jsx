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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías",
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("Todas");
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const [data] = await Promise.all([
          directorioService.obtenerEmpresas(),
          new Promise((resolve) => setTimeout(resolve, 800)), // mínimo 1.5s
        ]);
        setEmpresas(data);
      } catch (error) {
        console.error("Error al cargar empresas:", error.message);
        setEmpresas([]);
      }
    };

    fetchEmpresas();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [empresas, selectedCategory, searchTerm, selectedLetter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleOpenPopup = (empresa) => {
    setSelectedEmpresa(empresa);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedEmpresa(null);
  };

  const isLoading = empresas === null;

  const getSectorName = (empresa) => {
    const sector = empresa?.sector;

    if (typeof sector === "string") return sector;
    if (sector && typeof sector === "object") {
      return sector.nombre || sector.name || "";
    }

    return empresa?.sector_nombre || empresa?.categoria || "";
  };

  const normalizeValue = (value) =>
    String(value ?? "")
      .trim()
      .toLowerCase();

  const filteredEmpresas = empresas
    ? empresas.filter((empresa) => {
        const nombre = normalizeValue(empresa.nombre);
        const sector = normalizeValue(getSectorName(empresa));
        const normalizedSearchTerm = normalizeValue(searchTerm);
        const normalizedSelectedCategory = normalizeValue(selectedCategory);
        const matchesSearch = nombre.includes(normalizedSearchTerm);
        const matchesCategory =
          normalizedSelectedCategory === "" ||
          normalizedSelectedCategory === "todas las categorías" ||
          sector === normalizedSelectedCategory;
        const matchesLetter =
          selectedLetter === "Todas" ||
          nombre.charAt(0)?.toUpperCase() === selectedLetter;

        return matchesSearch && matchesCategory && matchesLetter;
      })
    : [];

  const totalPages = filteredEmpresas.length
    ? Math.max(1, Math.ceil(filteredEmpresas.length / itemsPerPage))
    : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleEmpresas = filteredEmpresas.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <div className="containerDirectorio">
        <h2 className="directory-title">Directorio de Empresas</h2>
        <div className="directory_container">
          <aside className="directory_sidebar">
            <Filter_directory
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
              resultsCount={filteredEmpresas.length}
            />
          </aside>

          <main className="companies_list">
            {isLoading ? (
              <div className="loading-state">
                <div className="spinner" />
                <p>Cargando empresas...</p>
              </div>
            ) : visibleEmpresas.length > 0 ? (
              visibleEmpresas.map((empresa) => (
                <Companies_list
                  key={empresa.id}
                  empresa={empresa}
                  onClick={() => handleOpenPopup(empresa)}
                />
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">🔎</div>
                <h3>No se encontraron empresas</h3>
                <p>Prueba con otros filtros o vuelve a cargar la lista.</p>
              </div>
            )}
          </main>

          <aside className="directory_ads">
            <Aside_adds />
          </aside>

          {!isLoading && totalPages > 1 && (
            <div className="directory_pagination">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                Anterior
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    style={{
                      padding: "8px 10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      background:
                        currentPage === pageNumber ? "#1f4f7c" : "white",
                      color: currentPage === pageNumber ? "white" : "#1f4f7c",
                      cursor: "pointer",
                    }}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Siguiente
              </button>
            </div>
          )}

          {!isLoading && (
            <aside className="adds_bottom">
              <Aside_addsBottom />
            </aside>
          )}
        </div>
      </div>

      {isPopupOpen && (
        <Popup_Company empresa={selectedEmpresa} onClose={handleClosePopup} />
      )}
    </>
  );
}

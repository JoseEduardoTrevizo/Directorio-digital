import React, { useState, useEffect } from "react";
import { obtenerSectores } from "../../services/registroServices";
import Select from "react-select";

export default function Filter_directory({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  onCategoryChange,
  selectedLetter,
  setSelectedLetter,
  resultsCount,
}) {
  const [sectores, setSectores] = useState([]);

  useEffect(() => {
    cargarSectores();
  }, []);

  const cargarSectores = async () => {
    try {
      const data = await obtenerSectores();
      setSectores(data.map((s) => ({ value: s.id, label: s.nombre })));
    } catch (err) {
      console.error("No se pudieron cargar sectores", err);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const normalizeValue = (value) =>
    String(value ?? "")
      .trim()
      .toLowerCase();

  const selectOptions = [
    { value: "Todas las categorías", label: "Todas las categorías" },
    ...sectores.map((sector) => ({
      value: sector.label,
      label: sector.label,
    })),
  ];

  const selectedOption =
    selectOptions.find(
      (option) =>
        normalizeValue(option.value) === normalizeValue(selectedCategory),
    ) || null;

  return (
    <div className="container_filterCompanys">
      <div className="filters-header">
        <h2>Filtros</h2>
      </div>

      <div className="filter-section">
        <label className="filter-label">🔍 Buscar por nombre</label>
        <input
          type="text"
          className="search-inputDirectory"
          placeholder="Nombre de la empresa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <label className="filter-label">Filtrar por categoría</label>
        <Select
          classNamePrefix="select"
          options={selectOptions}
          value={selectedOption}
          onChange={(selected) =>
            onCategoryChange(selected?.value || "Todas las categorías")
          }
          placeholder="Selecciona un sector"
          isSearchable={false}
        />
      </div>

      <div className="filter-section">
        <label className="filter-label">Filtrar por letra inicial</label>
        <div className="letter-grid">
          <button
            className={`letter-btn ${
              selectedLetter === "Todas" ? "active" : ""
            }`}
            onClick={() => setSelectedLetter("Todas")}
          >
            Todas
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              className={`letter-btn ${
                selectedLetter === letter ? "active" : ""
              }`}
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className="results-count">{resultsCount} empresas encontradas</div>
    </div>
  );
}

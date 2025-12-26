import React from "react";
import { useState } from "react";

export default function Filter_directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías"
  );
  const [selectedLetter, setSelectedLetter] = useState("Todas");
  const companies = [
    {
      id: 1,
      name: "AgroTech Solutions",
      category: "Agrícola",
      address: "Av. Reforma 123, Ciudad de México",
      employees: "50-100",
      since: "2018",
    },
    {
      id: 2,
      name: "Manufacturas del Norte",
      category: "Manufacturera",
      address: "Blvd. Constituyentes 456, Guadalajara",
      employees: "200-500",
      since: "2010",
    },
    {
      id: 3,
      name: "Alimentos Frescos SA",
      category: "Alimenticia",
      address: "Paseo de la Reforma 789, Ciudad de México",
      employees: "100-200",
      since: "2015",
    },
    {
      id: 4,
      name: "Remolques Industriales",
      category: "Remolques",
      address: "Av. Universidad 321, Monterrey",
      employees: "75-150",
      since: "2012",
    },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todas las categorías" ||
      company.category === selectedCategory;
    const matchesLetter =
      selectedLetter === "Todas" ||
      company.name[0].toUpperCase() === selectedLetter;
    return matchesSearch && matchesCategory && matchesLetter;
  });

  return (
    <div className="container_filterCompanys">
      <div className="filters-header">
        <h2>Filtros</h2>
      </div>

      <div className="filter-section">
        <label className="filter-label">🔍 Buscar por nombre</label>
        <input
          type="text"
          className="search-input"
          placeholder="Nombre de la empresa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <label className="filter-label">Filtrar por categoría</label>
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Todas las categorías</option>
          <option>Agrícola y Ganadero</option>
          <option>Tallers y Refagciones</option>
          <option>Comida y Hospedaje</option>
          <option>Maquinaria Industrial</option>
          <option>Fabricas</option>
          <option>Autos y Transportes</option>
          <option>Materiales para Construccion</option>
          <option>Servicios y Articulos Diversos</option>
        </select>
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

      <div className="results-count">
        {filteredCompanies.length} empresas encontradas
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function DireccionAutocomplete({ onSelect, className }) {
  const [query, setQuery] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef(null);

  const buscar = useDebouncedCallback(async (texto) => {
    if (!texto || texto.length < 3) {
      setSugerencias([]);
      return;
    }

    setCargando(true);
    try {
      const params = new URLSearchParams({
        q: texto,
        format: "json",
        addressdetails: 1,
        limit: 5,
        countrycodes: "mx",
        // Bias hacia Chihuahua (ajusta según tu caso)
        viewbox: "-109.0,31.8,-103.3,25.8",
        bounded: 0,
      });

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`,
        { headers: { "Accept-Language": "es" } },
      );
      const data = await res.json();
      setSugerencias(data);
      setAbierto(true);
    } catch (err) {
      console.error("Error geocodificando:", err);
    } finally {
      setCargando(false);
    }
  }, 400);

  const handleChange = (e) => {
    setQuery(e.target.value);
    buscar(e.target.value);
  };

  const handleSelect = (lugar) => {
    setQuery(lugar.display_name);
    setSugerencias([]);
    setAbierto(false);

    onSelect({
      direccion: lugar.display_name,
      lat: parseFloat(lugar.lat),
      lng: parseFloat(lugar.lon), // Nominatim usa "lon", no "lng"
    });
  };

  return (
    <div
      ref={contenedorRef}
      style={{ position: "relative" }}
      onBlur={(e) => {
        // Cierra solo si el foco sale del contenedor completo
        if (!contenedorRef.current?.contains(e.relatedTarget)) {
          setAbierto(false);
        }
      }}
    >
      <input
        className={className}
        value={query}
        onChange={handleChange}
        placeholder="C. 6a 1014, Centro..."
        autoComplete="off"
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #cbd5e1",
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          fontSize: 14,
          color: "#042442",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      {cargando && (
        <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
          Buscando...
        </div>
      )}

      {abierto && sugerencias.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#fff",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            marginTop: 4,
            padding: 0,
            listStyle: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxHeight: 220,
            overflowY: "auto",
          }}
        >
          {sugerencias.map((lugar) => (
            <li
              key={lugar.place_id}
              onMouseDown={() => handleSelect(lugar)} // mouseDown antes del blur
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: 13,
                color: "#042442",
                borderBottom: "1px solid #f1f5f9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#042442";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#042442";
              }}
            >
              {lugar.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

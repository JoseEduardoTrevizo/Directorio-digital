import { SearchBox } from "@mapbox/search-js-react";

export default function DireccionAutocomplete({ onSelect }) {
  return (
    <SearchBox
      accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      options={{
        language: "es",
        country: "MX",
        bbox: [-109.0, 25.8, -103.3, 31.8],
        proximity: [-106.8691, 28.4116],
      }}
      placeholder="C. 6a 1014, Centro..."
      theme={{
        variables: {
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          unit: "14px",
          borderRadius: "8px",

          // Colores principales
          colorBackground: "#ffffff",
          colorText: "#042442",
          colorPrimary: "#006e2f",

          // Bordes
          colorBorder: "#cbd5e1",
          colorBorderHover: "#006e2f",

          // Estados HOVER - VERDE SATURADO
          colorBackgroundHover: "#042442",
          colorTextHover: "#ffffff",

          // Estados SELECTED
          colorBackgroundSelected: "#16a34a",
          colorTextSelected: "#ffffff",
        },
      }}
      onRetrieve={(result) => {
        const feature = result.features[0];
        const [lng, lat] = feature.geometry.coordinates;

        onSelect({
          direccion: feature.properties.full_address,
          lat,
          lng,
        });
      }}
    />
  );
}

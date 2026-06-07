import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapaAjustable({ lat, lng, nombre, onCoordsChange }) {
  const [mostrarPopup, setMostrarPopup] = useState(true);

  if (!lat || !lng) {
    return (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          color: "#64748b",
        }}
      >
        Ubicación no disponible
      </div>
    );
  }

  return (
    <Map
      initialViewState={{ longitude: lng, latitude: lat, zoom: 15 }}
      style={{ width: "100%", height: 400, borderRadius: 12 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      transformRequest={(url) => {
        if (url.includes("events.mapbox.com")) return { url: "" };
        return { url };
      }}
    >
      <NavigationControl position="top-right" />

      <Marker
        longitude={lng}
        latitude={lat}
        color="#c6a75e"
        draggable={true} // ← habilita el drag
        onDragStart={() => setMostrarPopup(false)} // oculta el popup al arrastrar
        onDragEnd={(e) => {
          const { lng: nuevoLng, lat: nuevoLat } = e.lngLat;
          setMostrarPopup(true);
          onCoordsChange?.({ lat: nuevoLat, lng: nuevoLng }); // notifica al padre
        }}
        onClick={() => setMostrarPopup(true)}
      />

      {mostrarPopup && (
        <Popup
          longitude={lng}
          latitude={lat}
          anchor="bottom"
          offset={25}
          onClose={() => setMostrarPopup(false)}
          closeButton={true}
          closeOnClick={false}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: 13,
              color: "#042442",
            }}
          >
            {nombre}
          </p>
          <p style={{ margin: "2px 0 0 0", fontSize: 11, color: "#64748b" }}>
            Arrastra el pin para ajustar
          </p>
        </Popup>
      )}
    </Map>
  );
}

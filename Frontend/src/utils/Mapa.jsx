import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix del icono por defecto de Leaflet (bug conocido con bundlers)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url,
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

// Icono personalizado con tu color #c6a75e
const pinIcono = new L.DivIcon({
  className: "",
  html: `<div style="
    width: 14px; height: 14px;
    background: #c6a75e;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -12],
});

function NavigationControl() {
  // Leaflet ya incluye zoom controls por defecto en MapContainer
  // Este componente queda vacío — los controles vienen solos
  return null;
}

export default function Mapa({ lat, lng, nombre }) {
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
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      style={{ width: "100%", height: 400, borderRadius: 12 }}
      zoomControl={true} // equivalente a NavigationControl
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={[lat, lng]}
        eventHandlers={{
          click: () => setMostrarPopup(true),
        }}
      >
        {mostrarPopup && (
          <Popup
            offset={[0, -12]}
            onClose={() => setMostrarPopup(false)}
            closeButton={true}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: 13,
                color: "#042442",
                whiteSpace: "nowrap",
              }}
            >
              {nombre}
            </p>
          </Popup>
        )}
      </Marker>
    </MapContainer>
  );
}

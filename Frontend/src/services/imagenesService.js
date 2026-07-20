const API_URL = import.meta.env.VITE_API_URL;

// Obtener imágenes de galería
export async function getImagenesGaleria(empresaId) {
  try {
    const res = await fetch(`${API_URL}imagenes/${empresaId}/imagenes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al obtener imágenes");
    return data; // array de { id, url, orden }
  } catch (err) {
    console.error("getImagenesGaleria:", err);
    throw err;
  }
}

// Subir imagen a galería
export async function subirImagenGaleria(empresaId, file) {
  try {
    const formData = new FormData();
    formData.append("imagen", file);

    const res = await fetch(`${API_URL}imagenes/${empresaId}/imagenes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al subir imagen");
    return data; // { url }
  } catch (err) {
    console.error("subirImagenGaleria:", err);
    throw err;
  }
}

// Eliminar imagen de galería
export async function eliminarImagenGaleria(empresaId, imagenId) {
  try {
    const res = await fetch(
      `${API_URL}imagenes/${empresaId}/imagenes/${imagenId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al eliminar imagen");
    return data;
  } catch (err) {
    console.error("eliminarImagenGaleria:", err);
    throw err;
  }
}

// Subir foto de perfil
export async function subirFotoPerfil(empresaId, file) {
  try {
    const formData = new FormData();
    formData.append("imagen", file);

    const res = await fetch(`${API_URL}imagenes/${empresaId}/perfil`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al subir foto de perfil");
    return data; // { url }
  } catch (err) {
    console.error("subirFotoPerfil:", err);
    throw err;
  }
}

export async function seleccionarImagenCarrusel({ imagenId, profileUserId }) {
  try {
    const res = await fetch(
      `${API_URL}imagenes/${profileUserId}/carrusel/${imagenId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    const data = await res.json();
    if (!res.ok)
      throw new Error(
        data.error || "Error al seleccionar imagen para el carrusel",
      );
    return data;
  } catch (err) {
    console.error("seleccionarImagenCarrusel:", err);
    throw err;
  }
}

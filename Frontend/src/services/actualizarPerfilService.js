const API_URL = import.meta.env.VITE_API_URL;

const actualizarDatosEmpresa = async (id, datos) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!id || !datos) throw new Error("ID y datos son requeridos");

  try {
    const response = await fetch(`${API_URL}private/edit-profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al actualizar la empresa");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en actualizarDatosEmpresa:", error);
    throw error;
  }
};

const actualizarEncabezadoEmpresa = async (id, datos) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!id || !datos) throw new Error("ID y datos son requeridos");
  try {
    const response = await fetch(`${API_URL}private/edit-header/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.log("Status:", response.status);
      console.log("Respuesta del backend:", errorData); // ← agrega esto
      throw new Error(errorData.message || "Error al actualizar el encabezado");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en actualizarEncabezadoEmpresa:", error);
    throw error;
  }
};

const actualizarAcercaDeEmpresa = async (id, datos) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!id || !datos) throw new Error("ID y datos son requeridos");

  try {
    const response = await fetch(`${API_URL}private/edit-about/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Error al actualizar la información de la empresa",
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error en actualizarAcercaDeEmpresa:", error);
    throw error;
  }
};

export default {
  actualizarDatosEmpresa,
  actualizarEncabezadoEmpresa,
  actualizarAcercaDeEmpresa,
};

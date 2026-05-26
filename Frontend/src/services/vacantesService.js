const API_URL = import.meta.env.VITE_API_URL;

const obtenerVacantesPorEmpresa = async (empresaId) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!empresaId) throw new Error("ID de empresa es requerido");
  try {
    const response = await fetch(`${API_URL}vacantes/${empresaId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error al obtener las vacantes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en obtenerVacantesPorEmpresa:", error);
    throw error;
  }
};

const vacantesDisponibles = async () => {
  try {
    const response = await fetch(`${API_URL}vacantes/disponibles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en vacantesDisponibles:", error);
    throw error;
  }
};

const crearVacante = async (empresaId, vacanteData) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!empresaId || !vacanteData)
    throw new Error("ID de empresa y datos de vacante son requeridos");
  try {
    const response = await fetch(
      `${API_URL}vacantes/${empresaId}/nueva-vacante`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(vacanteData),
      },
    );
    if (!response.ok) {
      throw new Error("Error al crear la vacante");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en crearVacante:", error);
    throw error;
  }
};

const eliminarVacante = async (vacanteId) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!vacanteId) throw new Error("ID de vacante es requerido");
  try {
    const response = await fetch(`${API_URL}vacantes/eliminar/${vacanteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la vacante");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en eliminarVacante:", error);
    throw error;
  }
};
const actualizarVacante = async (vacanteId, vacanteData) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!vacanteId || !vacanteData)
    throw new Error("ID de vacante y datos son requeridos");
  try {
    const response = await fetch(`${API_URL}vacantes/actualizar/${vacanteId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(vacanteData),
    });
    if (!response.ok) throw new Error("Error al actualizar la vacante");
    return await response.json();
  } catch (error) {
    console.error("Error en actualizarVacante:", error);
    throw error;
  }
};

const pausarVacante = async ({ vacanteId, estatus }) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!vacanteId) throw new Error("ID de vacante es requerido");
  try {
    const response = await fetch(
      `${API_URL}vacantes/pausar-vacante/${vacanteId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ estatus }),
      },
    );
    if (!response.ok) {
      throw new Error("Error al pausar la vacante");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en pausarVacante:", error);
    throw error;
  }
};

const activarVacante = async ({ vacanteId, estatus }) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay sesión activa");
  if (!vacanteId) throw new Error("ID de vacante es requerido");
  try {
    const response = await fetch(
      `${API_URL}vacantes/activar-vacante/${vacanteId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ estatus }),
      },
    );
    if (!response.ok) {
      throw new Error("Error al activar la vacante");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en activarVacante:", error);
    throw error;
  }
};

export {
  obtenerVacantesPorEmpresa,
  crearVacante,
  vacantesDisponibles,
  actualizarVacante,
  eliminarVacante,
  pausarVacante,
  activarVacante,
};

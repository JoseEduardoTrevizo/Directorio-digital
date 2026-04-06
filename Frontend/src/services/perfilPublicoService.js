const API_URL = "http://localhost:5000/api";

export const obtenerEmpresaPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/empresa/${id}`);
    if (!response.ok) throw new Error("Error al obtener la empresa");
    return await response.json();
  } catch (error) {
    console.error("Error en perfilPublicoService:", error);
    throw error;
  }
};

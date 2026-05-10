const API_URL = import.meta.env.VITE_API_URL;

export const obtenerEmpresaPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}profile/empresa/${id}`);
    if (!response.ok) throw new Error("Error al obtener la empresa");
    return await response.json();
  } catch (error) {
    console.error("Error en perfilPublicoService:", error);
    throw error;
  }
};

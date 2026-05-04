const API_URL = import.meta.env.VITE_API_URL;

const obtenerEmpresas = async () => {
  console.log("API_URL", import.meta.env.VITE_API_URL);
  try {
    const response = await fetch(`${API_URL}directorio/empresas`);
    if (!response.ok) throw new Error("Error al obtener las empresas");
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error(
        "No se pudo conectar con el servidor. Verifica tu conexión.",
      );
    }
    console.error("Error en directorioService:", error.message);
    throw error;
  }
};

export default {
  obtenerEmpresas,
};

const API_URL = "http://localhost:5000/api/directorio";

const obtenerEmpresas = async () => {
  try {
    const response = await fetch(`${API_URL}/empresas`);
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

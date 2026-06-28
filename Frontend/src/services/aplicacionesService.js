const API_URL = import.meta.env.VITE_API_URL; // ajusta según tu config

export const enviarAplicacion = async (vacanteId, formData) => {
  try {
    const res = await fetch(`${API_URL}vacantes/${vacanteId}/aplicar`, {
      method: "POST",
      body: formData, // NO pongas Content-Type, el browser lo setea con boundary
    });

    // Intenta parsear la respuesta solo si el servidor devolvió contenido
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al enviar la aplicación");
    }

    return data;
  } catch (error) {
    console.error("Error en la petición:", error);
    throw error; // Reanudamos el error para que el componente que llama lo maneje
  }
};

export const incrementarAplicaciones = async (idVacante) => {
  try {
    const response = await fetch(
      `${API_URL}vacantes/${idVacante}/aplicaciones`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Error al actualizar aplicaciones");
    }

    return data;
  } catch (error) {
    console.error("Error al incrementar aplicaciones:", error);
    throw error;
  }
};

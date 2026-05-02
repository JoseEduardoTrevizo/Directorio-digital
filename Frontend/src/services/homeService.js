const API_URL = import.meta.env.VITE_API_URL;

const obtenerTipoCambioUSD = async () => {
  try {
    const response = await fetch(`${API_URL}divisas/tipo-cambio-usd`);

    if (!response.ok)
      throw new Error("Error al obtener el tipo de cambio USD/MXN");

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error(
        "No se pudo conectar con el servidor. Verifica tu conexión.",
      );
    }
    throw error;
  }
};

const getHistorico = async (base = "USD", dias = 7) => {
  try {
    const response = await fetch(
      `${API_URL}divisas/tipo-cambio-historico?base=${base}&dias=${dias}`,
    );

    console.log("respuesta", response);
    if (!response.ok)
      throw new Error("Error al obtener el histórico de tipo de cambio");

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error(
        "No se pudo conectar con el servidor. Verifica tu conexión.",
      );
    }
    throw error;
  }
};

const getClima = async (ciudad = "Cuauhtemoc") => {
  try {
    const response = await fetch(`${API_URL}weather/clima?ciudad=${ciudad}`);

    if (!response.ok) throw new Error("Error al obtener el clima");

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error(
        "No se pudo conectar con el servidor. Verifica tu conexión.",
      );
    }
    throw error;
  }
};

export default {
  obtenerTipoCambioUSD,
  getHistorico,
  getClima,
};

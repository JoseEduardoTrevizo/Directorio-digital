const API_URL = "http://localhost:5000/api/empresas";

// Errores personalizados para distinguir el tipo de fallo
class NetworkError extends Error {
  constructor() {
    super("No se pudo conectar al servidor. Verifica tu conexión.");
    this.type = "NETWORK_ERROR";
  }
}

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.type = "SERVER_ERROR";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.type = "VALIDATION_ERROR";
  }
}

export const registrarEmpresa = async (datosEmpresa) => {
  let response;

  // 1. Intenta hacer la petición — captura errores de red
  try {
    response = await fetch(`${API_URL}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosEmpresa),
      signal: AbortSignal.timeout(10000), // Timeout de 10 segundos
    });
  } catch (err) {
    if (err.name === "TimeoutError") {
      throw new NetworkError("La petición tardó demasiado. Intenta de nuevo.");
    }
    throw new NetworkError();
  }

  // 2. Intenta parsear el JSON de la respuesta
  let data;
  try {
    data = await response.json();
  } catch {
    throw new ServerError("El servidor devolvió una respuesta inválida.");
  }

  // 3. Manejo de errores HTTP por código de status
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new ValidationError(
          data.error || "Datos del formulario inválidos.",
        );
      case 409:
        throw new ValidationError(data.error || "El email ya está registrado.");
      case 500:
        throw new ServerError("Error en el servidor. Intenta más tarde.");
      default:
        throw new ServerError(`Error inesperado (${response.status}).`);
    }
  }

  return data;
};

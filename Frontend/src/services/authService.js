const API_URL = "http://localhost:5000/api/auth";

function handleHttpError(status, message) {
  switch (status) {
    case 400:
      return message || "Datos incorrectos, revisa tu email y contraseña";
    case 401:
      return "Email o contraseña incorrectos";
    case 404:
      return "Usuario no encontrado";
    case 500:
      return "Error en el servidor, intenta más tarde";
    default:
      return message || "Ocurrió un error inesperado";
  }
}

// Validación ANTES de hacer la petición (evita llamadas innecesarias al backend)
function validateLoginInputs(email, password) {
  const errors = {};

  if (!email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "El formato del email no es válido";
  }

  if (!password.trim()) {
    errors.password = "La contraseña es obligatoria";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  // Retorna null si no hay errores, o el objeto con los errores
  return Object.keys(errors).length > 0 ? errors : null;
}

// Retorna: { token, user: { id, nombre, email, industria } }
// Lanza un Error si algo falla
export async function loginService(email, password) {
  // 1. Validar inputs antes de llamar al backend
  const validationErrors = validateLoginInputs(email, password);
  if (validationErrors) {
    // Lanzamos el error con los errores de validación adjuntos
    const error = new Error("Errores de validación");
    error.validationErrors = validationErrors;
    throw error;
  }

  // 2. Hacer la petición
  let response;
  try {
    response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  } catch (networkError) {
    // fetch lanza error si no hay conexión o el servidor no responde
    throw new Error(
      "Sin conexión. Verifica tu internet o que el servidor esté activo",
    );
  }

  // 3. Parsear respuesta
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("La respuesta del servidor no es válida");
  }

  // 4. Verificar si el backend respondió con error
  if (!response.ok) {
    throw new Error(handleHttpError(response.status, data.message));
  }

  // 5. Verificar que el token venga en la respuesta
  if (!data.token) {
    throw new Error("El servidor no devolvió un token válido");
  }

  // 6. Retornar datos limpios
  // Ajusta los campos según lo que devuelva tu backend
  return {
    token: data.token,
    user: {
      id: data.user?.id,
      nombre: data.user?.nombre,
      email: data.user?.email,
      industria: data.user?.industria,
      plan: data.user?.plan,
    },
  };
}

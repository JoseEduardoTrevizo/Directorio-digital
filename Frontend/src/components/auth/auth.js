import { jwtDecode } from "jwt-decode";

// Guarda el token en localStorage cuando el usuario hace login
export function saveToken(token) {
  localStorage.setItem("token", token);
}

// Elimina el token cuando el usuario hace logout
export function removeToken() {
  localStorage.removeItem("token");
}

// Obtiene el token guardado
export function getToken() {
  return localStorage.getItem("token");
}

// Decodifica el token y devuelve el ID del usuario
// Si no hay token o está expirado, devuelve null
export function getCurrentUserId() {
  const token = getToken();

  // Si no hay token, el usuario no está logueado
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    // Verificar si el token ya expiró
    // decoded.exp viene en segundos, Date.now() en milisegundos
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) {
      removeToken(); // Limpiar token inválido
      return null;
    }

    // Retorna el ID del usuario (ajusta el campo según tu backend)
    // Puede ser decoded.id, decoded.userId, decoded.sub, etc.
    return decoded.id;
  } catch (error) {
    // Si el token está malformado
    removeToken();
    return null;
  }
}

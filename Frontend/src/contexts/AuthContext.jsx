import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { saveToken, removeToken, getToken } from "../components/auth/auth";

const AuthContext = createContext(null);

// Decodifica el token y devuelve el usuario completo
// Si no hay token o está expirado, devuelve null
function getUserFromToken() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) {
      removeToken();
      return null;
    }
    return decoded;
  } catch {
    removeToken();
    return null;
  }
}

export function AuthProvider({ children }) {
  // Inicializar con el usuario que ya esté en localStorage
  const [currentUser, setCurrentUser] = useState(() => getUserFromToken());

  function login(token) {
    saveToken(token);
    setCurrentUser(getUserFromToken()); // Decodifica y guarda el usuario
  }

  function logout() {
    removeToken();
    setCurrentUser(null);
  }

  function updateCurrentUser(nuevosData) {
    setCurrentUser((prev) => ({ ...prev, ...nuevosData }));
  }

  const value = {
    currentUser, // { id, email, nombre, industria } o null
    userId: currentUser?.id || null, // Acceso rápido al ID
    isLoggedIn: !!currentUser, // true/false
    login,
    logout,
    updateCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }
  return context;
}

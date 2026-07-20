const API_URL = import.meta.env.VITE_API_URL;

const actualizarPassword = async ({ token, payload }) => {
  try {
    const authToken = token ?? localStorage.getItem("token");

    if (!authToken) {
      throw new Error("No hay sesión activa");
    }

    const res = await fetch(`${API_URL}configuracion/actualizar-password`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok)
      throw new Error(data.error || "Error al actualizar contraseña");
    return data;
  } catch (err) {
    console.error("actualizarPassword:", err);
    throw err;
  }
};

export default {
  actualizarPassword,
};

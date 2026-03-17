const API_URL = "http://localhost:5000/api";

const actualizarEmpresa = async (id, datos) => {
  const response = await fetch(`${API_URL}/edit-profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la empresa");
  }

  return await response.json();
};

export default {
  actualizarEmpresa,
};

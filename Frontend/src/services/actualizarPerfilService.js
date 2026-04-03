const API_URL = "http://localhost:5000/api";

const actualizarEmpresa = async (id, datos) => {
  console.log("Datos enviados:", datos);
  console.log("Payload enviado:", JSON.stringify(datos, null, 2));
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

  const responseData = await response.json();
  return responseData;
};

export default {
  actualizarEmpresa,
};

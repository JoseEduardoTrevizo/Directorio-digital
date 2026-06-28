import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import edit from "../../assets/icons/edit.svg";
import imagen from "../../assets/icons/image.svg";
import notImagen from "../../assets/icons/bid_land.svg";
import PopupHomeProfile from "../../utils/PopupHomeProfile";
import { obtenerEmpresaPorId } from "../../services/perfilPublicoService";
import { toast, Toaster } from "react-hot-toast";
import {
  getImagenesGaleria,
  subirImagenGaleria,
  eliminarImagenGaleria,
} from "../../services/imagenesService";

export default function CardHomeProfile({ profileUserId }) {
  const { userId, updateCurrentUser } = useAuth();
  const [empresaData, setEmpresaData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]); // ahora son { id, url } reales de B2
  const [uploading, setUploading] = useState(false);
  const [limite, setLimite] = useState(null);

  const canUpload = limite === null || images.length < limite;

  useEffect(() => {
    if (!profileUserId) return;
    obtenerEmpresaPorId(profileUserId)
      .then((data) => {
        setEmpresaData(data);
      })
      .catch(console.error);
  }, [profileUserId]);

  // Carga las imágenes reales al montar
  useEffect(() => {
    if (!profileUserId) return;
    getImagenesGaleria(profileUserId)
      .then(({ imagenes, limite }) => {
        setImages(imagenes);
        setLimite(limite);
      })
      .catch(() => toast.error("No se pudieron cargar las imágenes"));
  }, [profileUserId]);


  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

  const handleSave = (nuevaData) => {
    setEmpresaData((prev) => ({ ...prev, ...nuevaData })); // actualiza el estado local
    updateCurrentUser({
      // actualiza el context
      informacion: nuevaData.about,
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // solo uno a la vez — controlamos el límite
    if (!file) return;

    // Reset del input para permitir subir el mismo archivo de nuevo si se borró
    e.target.value = "";
    if (!canUpload) {
      toast.error(`Límite de imágenes alcanzado (${limite})`);
      return;
    }
    setUploading(true);
    try {
      const { url } = await subirImagenGaleria(profileUserId, file);
      // Agrega la imagen nueva al final con un id temporal basado en url
      setImages((prev) => [...prev, { id: Date.now(), url }]);
      toast.success("Imagen subida correctamente");
    } catch (err) {
      toast.error(err.message || "Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async (imagenId) => {
    try {
      await eliminarImagenGaleria(profileUserId, imagenId);
      setImages((prev) => prev.filter((img) => img.id !== imagenId));
      toast.success("Imagen eliminada");
    } catch (err) {
      toast.error(err.message || "Error al eliminar la imagen");
    }
  };

  return (
    <>
      <main>
        <div className="container_Home">
          <div className="container-edit">
            <h2 className="titleCard_Profile">Acerca de la empresa</h2>
            {isOwnProfile && (
              <img
                className="iconProfile edit"
                src={edit}
                alt="Edit"
                onClick={() => setModalOpen(true)}
                style={{ cursor: "pointer" }}
              />
            )}

            {modalOpen && (
              <PopupHomeProfile
                empresa={empresaData}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
              />
            )}
          </div>
          <div className="container_Text">
            <p className="textCard_Profile-home">
              {empresaData?.about ||
                "La empresa aún no ha proporcionado información sobre sí misma."}
            </p>
          </div>
        </div>

        <div className="container_Home">
          <h2 className="titleCard_Profile">Galería</h2>
          {isOwnProfile ? (
            <div className="container_UploadImage">
              <div className="upload_Area">
                {images.length === 0 && !uploading ? (
                  <div className="upload_Placeholder">
                    <div className="icon_Camera">
                      <img src={imagen} alt="Cámara" />
                    </div>
                    <p className="upload_Text">
                      Agrega una imagen publicitaria
                    </p>
                  </div>
                ) : (
                  <div className="images_Grid">
                    {images.map((image, index) => (
                      <div key={image.id} className="banner_Container">
                        <button
                          className="btn_Remove"
                          onClick={() => removeImage(image.id)}
                          disabled={uploading}
                        >
                          ✕
                        </button>
                        <div className="banner_Image">
                          <img src={image.url} alt={`Banner ${index + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {canUpload && (
                  <>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/jpeg, image/png, image/webp"
                      onChange={handleImageChange}
                      className="input_File"
                      disabled={uploading}
                    />
                    <button
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                      className="btn_Upload"
                      disabled={uploading}
                    >
                      {uploading ? "Subiendo..." : "Subir imagen"}
                    </button>
                  </>
                )}
                {/* Mensaje cuando llegó al límite */}
                {!canUpload && limite !== null && (
                  <p className="upload_Text">
                    Has alcanzado el límite de {limite} imagen
                    {limite === 1 ? "" : "es"} de tu plan.
                  </p>
                )}
              </div>
            </div>
          ) : (
            // Vista de visitante — sin cambios respecto a tu código original,
            // pero ahora muestra URLs reales de B2 en vez de previews locales
            <div className="container_UploadImage">
              <div className="upload_Area">
                {images.length === 0 ? (
                  <div className="upload_Placeholder">
                    <div className="icon_Camera">
                      <img src={notImagen} alt="Sin imágenes" />
                    </div>
                    <p className="upload_Text">
                      La empresa aún no ha subido contenido promocional.
                    </p>
                  </div>
                ) : (
                  <div className="images_Grid">
                    {images.map((image, index) => (
                      <div key={image.id} className="banner_Container">
                        <div className="banner_Image">
                          <img src={image.url} alt={`Banner ${index + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <Toaster position="top-center" />
      </main>
    </>
  );
}

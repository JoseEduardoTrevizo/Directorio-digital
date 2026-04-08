import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import edit from "../../assets/icons/edit.svg";
import imagen from "../../assets/icons/image.svg";
import PopupHomeProfile from "../../utils/PopupHomeProfile";
import { obtenerEmpresaPorId } from "../../services/perfilPublicoService";

export default function CardHomeProfile({ profileUserId }) {
  const { userId, updateCurrentUser } = useAuth();
  const [empresaData, setEmpresaData] = useState(null);
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!profileUserId) return;
    obtenerEmpresaPorId(profileUserId)
      .then((data) => {
        console.log("plan en empresaData:", data);
        setEmpresaData(data);
      })
      .catch(console.error);
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

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({
            id: Date.now() + Math.random(),
            file: file,
            preview: reader.result,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages).then((loadedImages) => {
      setImages((prev) => [...prev, ...loadedImages]);
    });
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
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
            <p className="textCard_Profile-home">{empresaData?.about}</p>
          </div>
        </div>

        <div className="container_Home">
          <h2 className="titleCard_Profile">Tu empresa</h2>
          {isOwnProfile && (
            <div className="container_UploadImage">
              <div className="upload_Area">
                {images.length === 0 ? (
                  <div className="upload_Placeholder">
                    <div className="icon_Camera">
                      <img src={imagen} alt="Cámara" />
                    </div>
                    <p className="upload_Text">
                      Agrega una imagen publicitaria
                    </p>

                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="input_File"
                    />

                    <button onClick={handleButtonClick} className="btn_Upload">
                      Subir imagen
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="images_Grid">
                      {images.map((image, index) => (
                        <div key={image.id} className="banner_Container">
                          <button
                            className="btn_Remove"
                            onClick={() => removeImage(image.id)}
                          >
                            ✕
                          </button>
                          <div className="banner_Image">
                            <img
                              src={image.preview}
                              alt={`Banner ${index + 1}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="input_File"
                    />

                    <button onClick={handleButtonClick} className="btn_Upload">
                      Subir imagen
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

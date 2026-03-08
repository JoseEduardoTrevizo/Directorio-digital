import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import edit from "../../assets/icons/edit.svg";
import imagen from "../../assets/icons/image.svg";

export default function CardHomeProfile({ profileUserId }) {
  const [images, setImages] = useState([]);
  const { userId } = useAuth();

  const isOwnProfile =
    userId != null && String(userId) === String(profileUserId);

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
              <img className="iconProfile edit" src={edit} alt="Edit" />
            )}
          </div>
          <div className="container_Text">
            <p className="textCard_Profile-home">
              Empresa líder en desarrollo de software y soluciones tecnológicas
              innovadoras para el mercado mexicano. Empresa líder en desarrollo
              de software y soluciones tecnológicas innovadoras para el mercado
              mexicano. Empresa líder en desarrollo de software y soluciones
              tecnológicas innovadoras para el mercado mexicano. Empresa líder
              en desarrollo de software y soluciones tecnológicas innovadoras
              para el mercado mexicano.
            </p>
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

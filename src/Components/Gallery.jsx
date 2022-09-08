import getPhotoUrl from "get-photo-url";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([]);

  const addPhoto = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    };
    setAllPhotos([newPhoto, ...allPhotos]);
  };

  const deletePhotos = (item) => {
    let delPhotos = allPhotos.filter((removedItem) => {
      return removedItem.id !== item;
    });
    setAllPhotos(delPhotos);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <BsPlusCircle className="add-photo-button" />
      </label>

      <section className="gallery">
        {allPhotos.map((photo) => {
          return (
            <div className="item" id={photo.id}>
              <img src={photo.url} className="item-image" alt="" />

              <button
                className="delete-button"
                onClick={() => deletePhotos(photo.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Gallery;

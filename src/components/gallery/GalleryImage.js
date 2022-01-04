import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GalleryContext from "../../context/GalleryContext";
import { OPEN_LIGHTBOX } from "../../context/types/GalleryTypes";

const GalleryImage = ({ glr }) => {
  //! State
  const { dispatch } = useContext(GalleryContext);

  //! Function
  const openLightBox = (imgObj) => {
    dispatch({ type: OPEN_LIGHTBOX, payload: imgObj });
  };
  //! Render
  return (
    <div className="col-3">
      <div className="gallery__image animation">
        <LazyLoadImage src={glr.image} onClick={() => openLightBox(glr)} />
      </div>
    </div>
  );
};

export default GalleryImage;

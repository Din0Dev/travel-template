import React, { useReducer } from "react";
import GalleryReducer from "../reducers/GalleryReducer";
import gallery from "../../data/gallery";
import GalleryContext from "../GalleryContext";
const GalleryProvider = (props) => {
  //! State
  const [galleryStore, dispatch] = useReducer(GalleryReducer, {
    gallery,
    lightBoxStatus: false,
    currentLightBox: {},
  });

  //! Function

  //! Render
  return (
    <GalleryContext.Provider value={{ galleryStore, dispatch }}>
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;

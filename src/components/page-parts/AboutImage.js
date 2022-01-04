import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutImage = (props) => {
  //! State
  const [image] = useState("/assets/about/about.jpg");
  //! Function

  //! Render
  return (
    <div className="page__image">
      <LazyLoadImage src={image} alt="about image" />
    </div>
  );
};

export default AboutImage;

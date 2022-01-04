import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import routeUrl from "../constants/routeUrl"

const Header = ({ heading, paragraph, children, image }) => {
  //! State
  const [state] = useState({
    video: "/assets/videos/header.mp4",
    poster: "/assets/images/screen.png",
    logo: "/assets/images/logo.png",
  });

  const { push } = useHistory();

  //! Function
  const goToHome = (e) => {
    push(routeUrl.HOME_PAGE);
  };
  //! Render
  return (
    <div className="header">
      <div className="container pr">
        <div className="header__logo">
          <LazyLoadImage src={state.logo} alt="logo" onClick={goToHome} />
        </div>
      </div>
      <div className="header__video">
        {image ? (
          <LazyLoadImage src={image} alt={image} />
        ) : (
          <video
            src={state.video}
            autoPlay
            loop
            muted
            poster={state.poster}
          ></video>
        )}
      </div>
      <div className="header__contents">
        <div className="containter">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">{heading}</h1>
              <p className="header__contents__text__child__p">{paragraph}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

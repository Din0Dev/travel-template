import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = (props) => {
  //! State
  const [state] = useState({
    logo: "/assets/footer/logo.png",
    intro:
      "Travel friends is a traveling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we privde high quality servies to our vaulable customers.",
  });
  //! Function

  //! Render
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt="footer logo" />
      </div>
      <div className="footer__intro__msg animation">{state.intro}</div>
    </div>
  );
};

export default FooterIntro;

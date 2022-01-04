import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Destinations from "../components/Destinations";
import Footer from "../components/footer/Footer";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import ModelContext from "../context/ModelContext";
import { OPEN_MODAL } from "../context/types/ModelTypes";

const HomePage = (props) => {
  //! State
  const [state] = useState({
    heading: "Traveling Website",
    paragraph: "Design with ReactJS no Framework by Dino Dev ",
  });

  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");
  const { dispatch } = useContext(ModelContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //! Function

  //! Render
  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to the world with travel friends"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>
      {/*  */}
      <Header heading={state.heading} paragraph={state.paragraph}>
        <div className="header__contents__text__child__link">
          <button
            className="btn-default"
            onClick={() =>
              dispatch({ type: OPEN_MODAL, payload: registerModel })
            }
          >
            Let's Start!
          </button>
        </div>
      </Header>
      {/*  */}
      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      {/*  */}
      <Footer />
      {/* MODAL */}
      <Modal current={registerModel}>
        <Register currentModel={loginModel} />
      </Modal>
      <Modal current={loginModel}>
        <Login currentModel={registerModel} />
      </Modal>
    </>
  );
};

export default HomePage;

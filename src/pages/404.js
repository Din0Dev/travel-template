import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const PageNotFound = (props) => {
  //! State
  const [state] = useState({
    heading: "Oops, 404",
    paragraph: "Sorry, the page you are looking for does not exist.",
    image: "/assets/images/404.jpg",
  });
  //! Function

  //! Render
  return (
    <div>
      <Helmet>
        <title>Not found Page</title>
        <meta name="description" content="travell not found page" />
      </Helmet>
      <Header
        heading={state.heading}
        paragraph={state.paragraph}
        image={state.image}
      >
        <Link to="/" className="btn-default">Back to HomePage</Link>
      </Header>
    </div>
  );
};

export default PageNotFound;

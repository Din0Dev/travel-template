import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PageNotFound = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div>
      <Helmet>
        <title>Not found Page</title>
        <meta name="description" content="travell not found page" />
      </Helmet>
      <p>Page Not Found</p>
      <Link to="/">Back to HomePage</Link>
    </div>
  );
};

export default PageNotFound;

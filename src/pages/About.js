import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AboutImage from "../components/page-parts/AboutImage";
import PageContainer from "../components/page-parts/PageContainer";

const About = (props) => {
  //! State
  const [state] = useState({
    heading: "about us",
    pageHeading: "World best travel agency company since 2005",
    message:
      "Esse aliquip ea voluptate mollit fugiat nulla aliqua culpa aliqua pariatur quis pariatur.",
  });

  //! Function

  //! Render
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travell about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;

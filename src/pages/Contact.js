import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/page-parts/ContactForm";
import PageContainer from "../components/page-parts/PageContainer";

const Contact = (props) => {
  //! State
  const [state] = useState({
    heading: "Contact Page",
    pageHeading: "World best travel agency company since 2005",
    message:
      "Esse aliquip ea voluptate mollit fugiat nulla aliqua culpa aliqua pariatur quis pariatur.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //! Function

  //! Render
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travell contact page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;

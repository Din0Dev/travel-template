import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationsContext from "../context/DestinationsContext";
import { CITIES, DETAILS } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import DestinationsInfo from "../components/DestinationsInfo";
import Cities from "../components/cities/Cities";
const Details = (props) => {
  //! State
  const { id } = useParams();

  const { destinationsData, dispatch } = useContext(DestinationsContext);

  const { details, filteredCities } = destinationsData;

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scrollTo(0, 0);
  }, [id]);
  //! Function

  //! Render
  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationsInfo details={details} />
      <Cities cities={filteredCities} name={details.name} />
    </>
  );
};

export default Details;

import React, { useReducer } from "react";
import ServicesReducer from "../reducers/ServicesReducer";
import ServicesContext from "../ServicesContext";
import { services } from "../../data/services";
const ServicesProvider = (props) => {
  //! State
  const [servicesData, dispatch] = useReducer(ServicesReducer, {
    servicesData: services,
  });

  //! Function

  //! Render
  return (
    <ServicesContext.Provider value={{ servicesData, dispatch }}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;

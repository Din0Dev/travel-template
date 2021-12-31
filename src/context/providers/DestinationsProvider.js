import React, { useReducer } from "react";
import DestinationsContext from "../DestinationsContext";
import DestinationsReducer from "../reducers/DestinationsReducer";
import { destinations } from "../../data/destinations";
const DestinationsProvider = (props) => {
  //! State
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
  });

  //! Function

  //! Render
  return (
    <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
      {props.children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsProvider;

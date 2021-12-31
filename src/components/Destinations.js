import React, { useContext, useState } from "react";
import DestinationsContext from "../context/DestinationsContext";
import DestinationsList from "./DestinationsList";

const propTypes = {};

const Destinations = (props) => {
  //! State
  const {
    destinationsData: { destinations },
  } = useContext(DestinationsContext);

  const [state] = useState({
    heading:
      "Discover the most engaging places in the world with Travel Friends",
    paragraph:
      "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
  });
  //! Function

  //! Render
  return (
    <div className="destinations">
      <div className="container">
        <div className="row mr-minus-15 ml-minus-15">
          <div className="col-6 p-15">
            <div className="destinations__heading">{state.heading}</div>
          </div>
          <div className="col-6 p-15">
            <div className="destinations__paragraph">{state.paragraph}</div>
          </div>
        </div>
        <div className="destinations__block">
          <div className="row mr-minus-15 ml-minus-15">
            {destinations.map((destination) => (
              <DestinationsList destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Destinations.propTypes = propTypes;
export default Destinations;

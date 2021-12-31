import React from "react";
import DestinationsDetails from "./DestinationDetails";

const DestinationsInfo = ({ details }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="destinationsInfo">
      <div className="container">
        <h2 className="heading">OverView</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationsInfo__p">{details.details}</p>
          </div>
        </div>
        <h2 className="heading">Good to know</h2>
        <div className="row">
          <div className="col-8">
              <DestinationsDetails title="Language" text={details.language} />
              <DestinationsDetails title="Currency" text={details.currency} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsInfo;

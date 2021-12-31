import React, { useContext, useState } from "react";
import ServicesContext from "../../context/ServicesContext";
import ServicesLeft from "./ServicesLeft";
import ServicesList from "./ServicesList";

const Services = (props) => {
  //! State
  const {
    servicesData: { servicesData },
  } = useContext(ServicesContext);

  const [state] = useState({
    heading: "Why customers love travel friends ? because we love gang bang",
    subHeading:
      "Our aim is to provide professional and unique services to customer, and we have provied high quality",
  });
  //! Function

  //! Render
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus-15 services__contents__container">
            <div className="col-6 p-15">
              <ServicesLeft
                heading={state.heading}
                subHeading={state.subHeading}
              />
            </div>
            <div className="col-6 p-15">
              <ServicesList services={servicesData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

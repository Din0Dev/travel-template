import React, { useContext, useState } from "react";
import ServicesContext from "../../context/ServicesContext";
import ReviewBody from "./ReviewBody";

const Reviews = (props) => {
  //! State
  const [heading] = useState("Reviews");

  const {
    servicesData: { reviewsData },
  } = useContext(ServicesContext);
  //! Function

  //! Render
  return (
    <div className="reviews">
      <div className="container">
        <h2 className="heading">{heading}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {reviewsData.length > 0
            ? reviewsData.map((review, index) => (
                <ReviewBody key={index} review={review} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

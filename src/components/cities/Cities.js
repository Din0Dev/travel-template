import React from "react";
import CitiesImage from "./CitiesImage";
import CitiesContents from "./CitiesContents";
const Cities = ({ cities, name }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="cities">
      <div className="container">
        <h2 className="heading">Cities in {name}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {cities.length > 0
            ? cities.map((city) => (
                <div className="col-3 p-15" key={city.id}>
                  <div className="cities__body">
                    <CitiesImage img={city.image} status={city.status} />
                    <CitiesContents
                      name={city.name}
                      duration={city.duration}
                      price={city.price}
                      room={city.room}
                      food={city.food}
                    />
                  </div>
                </div>
              ))
            : `No cities in ${name}`}
        </div>
      </div>
    </div>
  );
};

export default Cities;

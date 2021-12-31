import React from "react";
import { BsStopwatch } from "react-icons/bs";
import Facilities from "./Facilities";
const CitiesContents = ({ name, duration, price, room, food }) => {
  //! State
  const formatPrice = (price) => {
    return `${price}.00`;
  };
  //! Function

  //! Render
  return (
    <div className="cities__body__contents">
      <div className="cities__body__contents__top">
        <div className="cities__body__contents__top__name">{name}</div>
        <div className="cities__body__contents__top__duration">
          <BsStopwatch size={18} color="#df2189" />
          <div className="cities__body__contents__top__duration__time">
            {duration}
          </div>
        </div>
      </div>
      <div className="cities__body__contents__price">
        <span className="cities__body__contents__price__dollar">$</span>
        {formatPrice(price)}
      </div>
      <Facilities name="room" value={room} />
      <Facilities name="food" value={food} />
      <div className="cities__body__contents__button">
        <button className="btn-dark-sm">Buy Now</button>
      </div>
    </div>
  );
};

export default CitiesContents;

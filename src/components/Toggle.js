import React, { useContext } from "react";
import PropTypes from "prop-types";
import NavContext from "../context/NavContext";
import { NAV_TOGGLE } from "../context/types/NavTypes";
const propTypes = {};

const Toggle = (props) => {
  //! State
  const { state, dispatch } = useContext(NavContext);
  //! Function

  //! Render
  return (
    <div
      className={state ? "toggle-close" : "toggle-open"}
      onClick={() => dispatch({ type: NAV_TOGGLE })}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

Toggle.propTypes = propTypes;
export default Toggle;

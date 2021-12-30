import React, { useReducer } from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducers/NavReducer";

const NavProvider = (props) => {
  //! State
  const [state, dispatch] = useReducer(NavReducer, false);

  //! Function

  //! Render
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavProvider;

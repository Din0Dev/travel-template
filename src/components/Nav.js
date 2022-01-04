import React, { useContext } from "react";
import { Link } from "react-router-dom";
import routeUrl from "../constants/routeUrl";
import NavContext from "../context/NavContext";

const Nav = (props) => {
  //! State
  const { state, dispatch } = useContext(NavContext);
  //! Function

  //! Render
  return (
    <>
      {state ? <div className="navLayer"></div> : ""}
      <div className={state ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to={routeUrl.HOME_PAGE}>Home</Link>
          </li>
          <li>
            <Link to={routeUrl.ABOUT_PAGE}>About</Link>
          </li>
          <li>
            <Link to={routeUrl.CONTACT_PAGE}>Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;

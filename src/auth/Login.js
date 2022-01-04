import React, { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODAL } from "../context/types/ModelTypes";

const Login = ({ currentModel }) => {
  //! State
  const { dispatch } = useContext(ModelContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  //! Function
  const loginForm = (e) => {
    e.preventDefault();
    console.log(state);
  }
  //! Render
  return (
    <form onSubmit={loginForm}>
      <div className="modal__heading">
        <h3>Login</h3>
      </div>
      {/*  */}
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Ente your Email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
      </div>
      {/*  */}
      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="Enter your Password"
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />
      </div>
      {/*  */}
      <div className="group modal__row">
        <input type="submit" name="" className="btn-dark" value="Login" />
        <span
          onClick={() => dispatch({ type: OPEN_MODAL, payload: currentModel })}
        >
          Create new account?
        </span>
      </div>
      {/*  */}
    </form>
  );
};

export default Login;

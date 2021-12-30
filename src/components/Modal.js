import React from "react";
import { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { CLOSE_MODAL } from "../context/types/ModelTypes";
const Modal = (props) => {
  //! State
  const { state, dispatch } = useContext(ModelContext);
  const isModelStatus = state.modelStatus;

  //! Function
  const close = (e) => {
    if (e.target.getAttribute("class") === "modal") {
      dispatch({ type: CLOSE_MODAL });
    }
  };
  //! Render
  return isModelStatus && state.current === props.current ? (
    <div className="modal" onClick={close}>
      <div className="modal__body">{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default Modal;

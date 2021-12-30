import { CLOSE_MODAL, OPEN_MODAL } from "../types/ModelTypes";

const ModelReducer = (state, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      modelStatus: true,
      current: action.payload,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      modelStatus: false,
      current: "",
    };
  }
  return state;
};

export default ModelReducer;

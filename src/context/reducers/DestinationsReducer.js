import { CITIES, DETAILS } from "../types/DestinationTypes";

const DestinationsReducer = (state, action) => {
  const { type, payload } = action;
  if (type === DETAILS) {
    const detailDestination = state.destinations.find(
      (des) => des.id === parseInt(payload)
    );
    return {
      ...state,
      details: detailDestination,
    };
  }
  if (type === CITIES) {
    const filtered = state.cities.filter(
      (CITIES) => parseInt(CITIES.destinationId) === parseInt(payload)
    );
    return {
      ...state,
      filteredCities: filtered,
    };
  }
  return state;
};

export default DestinationsReducer;

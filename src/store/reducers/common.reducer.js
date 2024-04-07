import { actionTypes } from "../constants/";

// INITIAL REDUCER STATES
const initialState = {};

// REDUCER DATA MAPPING
const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.data_request:
      return {
        ...state,
        [action.keyMapping + "_loader"]: true,
      };
    case actionTypes.data_failure:
      return {
        ...state,
        [action.keyMapping + "_loader"]: false,
      };
    case actionTypes.data_success + action.keyMapping:
      return {
        ...state,
        [action.keyMapping]: action.data,
        [action.keyMapping + "_loader"]: false,
      };
    case actionTypes.clear_all_data:
      const { keepKeys } = action;
      const newState = {};

      // Keep specified keys and reset others to their initial state
      Object.keys(initialState).forEach((key) => {
        newState[key] = keepKeys.includes(key) ? state[key] : initialState[key];
      });

      return newState;

    default:
      return {
        ...state,
      };
  }
};
export default common;

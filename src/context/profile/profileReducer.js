import { GET_NAME } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        names: action.payload
      };

    default:
      return state;
  }
};

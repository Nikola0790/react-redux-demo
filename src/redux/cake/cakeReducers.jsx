import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { BUY_CAKE } from "./cakeTypes";

const initalState = {
  numOfCakes: 10,
};

const reducerCake = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default reducerCake;

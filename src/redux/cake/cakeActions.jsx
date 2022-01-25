import { BUY_CAKE } from "./cakeTypes";

const actionBuyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export default actionBuyCake;

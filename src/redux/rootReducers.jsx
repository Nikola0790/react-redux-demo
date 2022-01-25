import reducerCake from "./cake/cakeReducers";
import reducerIceCream from "./iceCream/iceCreamReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

export default rootReducer;

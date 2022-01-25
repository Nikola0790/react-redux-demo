import reducerCake from "./cake/cakeReducers";
import reducerIceCream from "./iceCream/iceCreamReducers";
import reducerUsers from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
  user: reducerUsers,
});

export default rootReducer;

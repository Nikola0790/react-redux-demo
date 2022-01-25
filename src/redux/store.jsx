import { createStore } from "redux";
import reducerCake from "./cake/cakeReducers";

const store = createStore(reducerCake);

export default store;

import { createStore } from "redux";
import counterReducer from "./Services/Reducer/Reducer";

const store = createStore(counterReducer)

export default store;
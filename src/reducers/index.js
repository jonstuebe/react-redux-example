import { combineReducers } from "redux";

import CounterReducer from "./counter";
import fetchData from "./fetchData";

export default combineReducers({
  counter: CounterReducer,
  fetchData: fetchData
});

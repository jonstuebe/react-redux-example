import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

import CounterReducer from "./counter";
import FetchData from "./fetchData";

export default combineReducers({
  counter: CounterReducer,
  fetchData: FetchData
  // router: routerReducer
});

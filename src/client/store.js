import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import history from "./history";
import rootReducer from "../reducers";

const middleware = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
);

const store = createStore(rootReducer, middleware);
export default store;

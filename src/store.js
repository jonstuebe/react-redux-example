import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = initialState => {
  return createStore(rootReducer, initialState, middleware);
};
export default store;

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";

import createStore from "../src/store";
import App from "../src/App";

export default (initialState = {}, location = "", context = {}) => {
  const store = createStore(initialState);
  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router location={location} context={context}>
        <App />
      </Router>
    </Provider>
  );
  const state = store.getState();

  return {
    markup,
    state
  };
};

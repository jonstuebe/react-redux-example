import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";

import createStore from "../src/store";
import App from "../src/App";

const store = createStore();

export default (location = "", context = {}) => {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router location={location} context={context}>
        <App />
      </Router>
    </Provider>
  );
};

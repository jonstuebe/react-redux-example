import React from "react";
import ReactDOMServer from "react-dom/server";
import AppContainer from "../src/server";

export default () => {
  return ReactDOMServer.renderToString(<AppContainer />);
};

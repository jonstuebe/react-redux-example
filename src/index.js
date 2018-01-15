import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Link } from "react-router-dom";

import store from "./store";
import history from "./history";

import Counter from "./containers/Counter";
import FetchData from "./containers/FetchData";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Counter />
            <FetchData />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h2>About</h2>
                </div>
              )}
            />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));

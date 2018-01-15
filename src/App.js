import React from "react";
import { Link, Route } from "react-router-dom";

import Counter from "./containers/Counter";
import FetchData from "./containers/FetchData";

export default () => (
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
);

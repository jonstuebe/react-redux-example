import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/counter";

const Counter = ({ increment, decrement, count }) => (
  <div>
    Current counter value: {count}
    <div>
      <button onClick={e => increment()}>Increment</button>
    </div>
    <div>
      <button onClick={e => decrement()}>Decrement</button>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

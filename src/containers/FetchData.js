import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/fetchData";

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    const { fetchData, fetchReset, response } = this.props;
    return (
      <div style={{ border: "1px solid #ccc" }}>
        <input
          type="text"
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
        <button onClick={fetchData.bind(null, this.state.value)}>
          load data
        </button>
        <button onClick={fetchReset}>reset</button>
        {response.loading ? (
          <p>Loading</p>
        ) : (
          <Fragment>
            {response.error ? (
              <p>Error</p>
            ) : (
              <ul>
                {response.data.map((item, index) => (
                  <li key={index}>
                    <pre>{JSON.stringify(item, null, 2)}</pre>
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { fetchData } = state;
  return {
    response: fetchData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);

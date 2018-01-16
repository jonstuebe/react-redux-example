import * as types from "../constants/fetchData";
import axios from "axios";

export function fetchStarted() {
  return {
    type: types.FETCH_STARTED
  };
}

export function fetchSuccess(data) {
  return {
    type: types.FETCH_SUCCESS,
    data
  };
}

export function fetchFailure(error) {
  return {
    type: types.FETCH_FAILURE,
    error
  };
}

export function fetchReset() {
  return {
    type: types.FETCH_RESET
  };
}

export function fetchData(url) {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      resolve(dispatch(fetchStarted()));
    }).then(() => {
      return axios
        .get(url)
        .then(response => {
          dispatch(fetchSuccess(response.data));
        })
        .catch(err => {
          dispatch(fetchFailure(err.response));
        });
    });
  };
}

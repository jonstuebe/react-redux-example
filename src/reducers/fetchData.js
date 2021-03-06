import * as types from "../constants/fetchData";

const initialState = {
  data: [],
  loading: false
};

export default function fetchData(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        data: action.data,
        loading: false
      };
    case types.FETCH_FAILURE:
      return {
        error: action.error,
        loading: false
      };
    case types.FETCH_STARTED:
      return {
        data: [],
        loading: true
      };
    case types.FETCH_RESET:
      return initialState;
    default:
      return state;
  }
}

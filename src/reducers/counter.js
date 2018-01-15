import * as types from "../constants/counter";

export default function Counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

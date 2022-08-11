import { createStore } from "redux";
import { status, sortAction } from "./Actions/index";
var defaultState = {
  status: true,
  sort: {
    by: "name",
    value: 2
  }
};
var myreducer = (state = defaultState, action) => {
  var { status } = action;
  if (action.type === "status") {
    state.status = !state.status;
    return state;
  }
  if (action.type === "sort") {
    var { by, value } = action.sort;
    var status = state.status;
    return {
      status: status,
      sort: {
        by: by,
        value: value
      }
    };
  }
  return state;
};

// var action = {
//   type: "status",
//   status: defaultState.init
// };
// var sortAction = {
//   type: "sort",
//   sort: {
//     by: "name",
//     value: -1
//   }
// };

var store = createStore(myreducer);
console.log("Default: ", store.getState());
store.dispatch(status());
// console.log(store.getState());
store.dispatch(
  sortAction({
    by: "Hello",
    value: 10
  })
);
console.log(store.getState());

store.dispatch(
  sortAction({
    by: "Hello",
    value: 12
  })
);
console.log(store.getState());

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { throttle } from "lodash";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadState = (state) => {
  try {
    return localStorage.getItem("state")
      ? JSON.parse(localStorage.getItem("state"))
      : {};
  } catch {
    return {};
  }
};
const initialState = loadState();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  1000
);

export default store;

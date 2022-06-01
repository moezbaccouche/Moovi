import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

export const configureStore = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

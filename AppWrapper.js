import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./src/store/store";

const AppWrapper = () => {
  return (
    <Provider store={configureStore}>
      <App />
    </Provider>
  );
};

export default AppWrapper;

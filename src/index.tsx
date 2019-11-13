import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import { Store } from "redux";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store/configureStore";

const rootElement = document.getElementById("root");
const store = configureStore();

const render = (Component: ComponentType<{ store: Store }>) => {
  ReactDOM.render(<Component store={store} />, rootElement);
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(require("./App").App);
  });
}

// If you want your auth to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

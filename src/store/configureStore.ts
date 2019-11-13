import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState = {}): Store => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      store.replaceReducer(require("./reducer").rootReducer);
    });

    module.hot.accept("./saga", () => {
      const nextRootSaga = require("./saga").rootSaga;

      sagaTask.cancel();

      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return store;
};

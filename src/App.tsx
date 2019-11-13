import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Store } from "redux";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { TabMode } from "./components/common/TabMode";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";

type Props = {
  store: Store;
};

export const App: FC<Props> = ({ store }) => {
  return (
    <TabMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </Router>

        <GlobalStyles />
      </Provider>
    </TabMode>
  );
};

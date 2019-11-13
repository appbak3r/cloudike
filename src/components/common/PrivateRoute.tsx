import React, { ComponentType, FC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../../store/reducer";
import { Loading } from "./Loading";

type OwnProps = RouteProps;
type StateProps = {
  isAuthorized: boolean;
  isReady: boolean;
};
type Props = OwnProps & StateProps;

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isAuthorized: state.auth.isAuthorized,
    isReady: state.auth.isReady
  };
};

const EnhancedPrivateRoute: FC<Props> = ({
  component: Component,
  isAuthorized,
  isReady,
  render,
  ...restProps
}) => {
  const preRender = (props: any) => {
    if (!isReady) {
      return <Loading />;
    }

    if (!isAuthorized) {
      return <Redirect to="/login" />;
    }

    if (Component) {
      return <Component {...props} />;
    }

    if (render) {
      return render(props);
    }

    return null;
  };

  return <Route {...restProps} render={preRender} />;
};

export const PrivateRoute = connect(mapStateToProps)(
  EnhancedPrivateRoute
) as ComponentType<OwnProps>;

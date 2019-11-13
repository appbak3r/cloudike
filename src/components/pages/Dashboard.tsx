import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getAuthRequest } from "../../store/auth/actions";
import { AuthState } from "../../store/auth/types";
import { RootState } from "../../store/reducer";

type StateProps = AuthState;
type OwnProps = {};
type DispatchProps = {
  getAuth: typeof getAuthRequest;
};

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => state.auth;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      getAuth: getAuthRequest
    },
    dispatch
  );
};

const EnhancedDashboard: FC<Props> = ({ isAuthorized, getAuth }) => {
  return (
    <div>
      <button onClick={getAuth}>Sign in</button>
    </div>
  );
};

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedDashboard) as FC<OwnProps>;

import React, { FC } from "react";
import { connect } from "react-redux";
import { AuthState } from "../../store/auth/types";
import { RootState } from "../../store/reducer";
import { Photos } from "../photos/Photos";

type StateProps = AuthState;
type OwnProps = {};
type Props = OwnProps & StateProps;

const mapStateToProps = (state: RootState): StateProps => state.auth;

const EnhancedDashboard: FC<Props> = ({ userData }) => {
  return (
    <div>
      <Photos userId={userData.userid} />
    </div>
  );
};

export const Dashboard = connect(mapStateToProps)(EnhancedDashboard) as FC<
  OwnProps
>;

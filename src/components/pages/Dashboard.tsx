import React, { FC, memo } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { AuthState } from "../../store/auth/types";
import { RootState } from "../../store/reducer";
import { LogoutButton } from "../auth/LogoutButton";
import { Photos } from "../photos/Photos";
import { Photo } from "./Photo";

type StateProps = AuthState;
type OwnProps = {};
type Props = OwnProps & StateProps;

const mapStateToProps = (state: RootState): StateProps => state.auth;

const EnhancedDashboard: FC<Props> = memo(({ userData }) => {
  return (
    <>
      <LogoutButton />
      <Photos userId={userData.userid} />

      <Route path="/photos/:userId/:id" component={Photo} />
    </>
  );
});

export const Dashboard = connect(mapStateToProps)(EnhancedDashboard) as FC<
  OwnProps
>;

import React, { FC, memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { logout } from "../../store/auth/actions";
import { Button } from "../common/Button";

type DispatchProps = {
  logout: typeof logout;
};

type OwnProps = {};

type Props = DispatchProps & OwnProps;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

const EnhancedLogoutButton: FC<Props> = memo(({ logout }) => (
  <Button onClick={logout}>Logout</Button>
));

export const LogoutButton: FC<OwnProps> = connect(
  null,
  mapDispatchToProps
)(EnhancedLogoutButton);

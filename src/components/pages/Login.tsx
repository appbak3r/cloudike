import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import styled from "styled-components";
import { authorizeRequest } from "../../store/auth/actions";
import { AuthState } from "../../store/auth/types";
import { RootState } from "../../store/reducer";
import { SignInForm } from "../auth/SignInForm";
import { Logo } from "../common/Logo";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
  padding: 15px;
  box-sizing: border-box;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  position: relative;

  ${Logo} {
    position: absolute;
    top: -60px;
    left: 50%;
    width: 120px;
    transform: translateX(-50%);
  }
`;

type OwnProps = {};
type StateProps = AuthState;
type DispatchProps = {
  authorize: typeof authorizeRequest;
};
type Props = OwnProps & DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      authorize: authorizeRequest
    },
    dispatch
  );

const mapStateToProps = (state: RootState): StateProps => {
  return state.auth;
};

const EnhancedLogin: FC<Props> = ({ authorize, isAuthorized }) => {
  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <FormWrapper>
        <Logo alternative={true} />

        <SignInForm onSubmit={authorize} />
      </FormWrapper>
    </Wrapper>
  );
};

export const Login: FC<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedLogin);

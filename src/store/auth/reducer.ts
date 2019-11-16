import { ActionType, createReducer } from "typesafe-actions";
import { getState } from "../localStorage";
import * as actions from "./actions";
import { AuthState } from "./types";

type AuthAction = ActionType<typeof actions>;

const clearState: AuthState = {
  isAuthorized: false,
  token: "",
  isReady: false,
  userData: {
    userid: -1
  }
};

const initialState: AuthState = {
  ...clearState,
  ...getState("auth")
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(actions.logout, () => {
    return clearState;
  })
  .handleAction(actions.getAuthSuccess, (state, action) => {
    return {
      ...state,
      isAuthorized: true,
      userData: action.payload,
      isReady: true
    };
  })
  .handleAction(actions.getAuthFailure, state => {
    return {
      ...state,
      isAuthorized: false,
      isReady: true
    };
  })
  .handleAction(actions.authorizeSuccess, (state, action) => {
    return {
      ...state,
      isAuthorized: true,
      token: action.payload
    };
  })
  .handleAction(actions.authorizeFailure, state => {
    return {
      ...state,
      isAuthorized: false
    };
  });

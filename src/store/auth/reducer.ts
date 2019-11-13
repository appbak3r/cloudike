import { ActionType, createReducer } from "typesafe-actions";
import { getState } from "../localStorage";
import * as actions from "./actions";
import { AuthState } from "./types";

type AuthAction = ActionType<typeof actions>;

const initialState: AuthState = {
  isAuthorized: false,
  token: "",
  isReady: false,
  ...getState("auth")
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(actions.getAuthSuccess, state => {
    return {
      ...state,
      isAuthorized: true,
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

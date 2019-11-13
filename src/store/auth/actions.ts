import { FormikHelpers } from "formik";
import { createAction } from "typesafe-actions";
import { AuthActionTypes, AuthorizeRequestPayload } from "./types";

export const getAuthRequest = createAction(AuthActionTypes.GET_AUTH_REQUEST)();
export const getAuthSuccess = createAction(AuthActionTypes.GET_AUTH_SUCCESS)();
export const getAuthFailure = createAction(AuthActionTypes.GET_AUTH_FAILURE)();

export const authorizeRequest = createAction(AuthActionTypes.AUTHORIZE_REQUEST)<
  AuthorizeRequestPayload,
  FormikHelpers<AuthorizeRequestPayload>
>();
export const authorizeSuccess = createAction(AuthActionTypes.AUTHORIZE_SUCCESS)<
  string
>();
export const authorizeFailure = createAction(
  AuthActionTypes.AUTHORIZE_FAILURE
)();

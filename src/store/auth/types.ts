export type AuthState = {
  isAuthorized: boolean;
  token: string;
  isReady: boolean;
  userData: UserDataPayload;
};

export enum AuthActionTypes {
  GET_AUTH_REQUEST = "@@auth/get-auth/request",
  GET_AUTH_SUCCESS = "@@auth/get-auth/success",
  GET_AUTH_FAILURE = "@@auth/get-auth/failure",
  AUTHORIZE_REQUEST = "@@auth/authorize/request",
  AUTHORIZE_SUCCESS = "@@auth/authorize/success",
  AUTHORIZE_FAILURE = "@@auth/authorize/failure"
}

export type AuthorizeRequestPayload = {
  login: string;
  password: string;
};

export type UserDataPayload = {
  userid: number;
};

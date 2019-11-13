import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { ActionType, getType } from "typesafe-actions";
import { axiosClient } from "../../config/axios";
import { AuthService } from "../../services/AuthService";
import { validatePhone } from "../../utils/validations";
import { saveState } from "../localStorage";
import { RootState } from "../reducer";
import * as actions from "./actions";

function* getAuth() {
  const state: RootState = yield select();

  if (!state.auth.token) {
    return yield put(actions.getAuthFailure());
  }

  const data = yield AuthService.getAuth();

  if (data.error) {
    return yield put(actions.getAuthFailure());
  }

  yield put(actions.getAuthSuccess());
}

function* authorize(action: ActionType<typeof actions.authorizeRequest>) {
  const formApi = action.meta;
  formApi.setStatus({ loading: true });

  const { login, password } = action.payload;
  const isPhone = validatePhone(action.payload.login);
  let data;

  if (isPhone) {
    data = yield AuthService.authorizeWithPhone({
      password,
      phone: login
    });
  } else {
    data = yield AuthService.authorizeWithEmail({
      password,
      email: login
    });
  }

  if (data.error) {
    let message = data.error.response.data.description;

    formApi.setStatus({ error: message, loading: false });

    return yield put(actions.authorizeFailure());
  }

  formApi.setStatus({ loading: false });

  return yield put(actions.authorizeSuccess(data.token));
}

function saveToken(action: ActionType<typeof actions.authorizeSuccess>) {
  saveState({
    auth: {
      token: action.payload
    }
  });
}

function* initialize() {
  const state: RootState = yield select();

  axiosClient.defaults.headers["Mountbit-Auth"] = state.auth.token;

  yield put(actions.getAuthRequest());
}

export function* authSaga() {
  yield all([
    call(initialize),
    takeEvery(getType(actions.getAuthRequest), getAuth),
    takeEvery(getType(actions.authorizeRequest), authorize),
    takeEvery(getType(actions.authorizeSuccess), saveToken)
  ]);
}

import { all, fork } from "redux-saga/effects";
import { authSaga } from "./auth/saga";
import { photosSaga } from "./photos/saga";

export function* rootSaga() {
  yield all([fork(authSaga), fork(photosSaga)]);
}

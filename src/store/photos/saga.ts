import { all, put, select, takeEvery } from "redux-saga/effects";
import { ActionType, getType } from "typesafe-actions";
import { axiosClient } from "../../config/axios";
import { PhotoService } from "../../services/PhotoService";
import { parseLink } from "../../utils/parseLink";
import { RootState } from "../reducer";
import * as actions from "./actions";
import { mapPhotoItem } from "./mappers";
import { PhotoItem } from "./types";

function* getPhotos(action: ActionType<typeof actions.getPhotosRequest>) {
  const data = yield PhotoService.getAll(action.payload);

  if (data.error) {
    return yield put(actions.getPhotosRequestFailure());
  }

  try {
    const items: PhotoItem[] = data._embedded.items.map(mapPhotoItem);

    yield put(
      actions.getPhotosRequestSuccess({
        items,
        next: parseLink(data._links.next)
      })
    );
  } catch {
    yield put(actions.getPhotosRequestFailure());
  }
}

function* getMorePhotos() {
  const state: RootState = yield select();
  const { next } = state.photos;

  if (!next) {
    return yield put(actions.getMorePhotosRequestFailure());
  }

  try {
    const { data } = yield axiosClient.get(next);

    const items: PhotoItem[] = data._embedded.items.map(mapPhotoItem);

    yield put(
      actions.getMorePhotosRequestSuccess({
        items,
        next: parseLink(data._links.next)
      })
    );
  } catch {
    yield put(actions.getMorePhotosRequestFailure());
  }
}

export function* photosSaga() {
  yield all([
    takeEvery(getType(actions.getPhotosRequest), getPhotos),
    takeEvery(getType(actions.getMorePhotosRequest), getMorePhotos)
  ]);
}

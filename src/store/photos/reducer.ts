import { ActionType, createReducer } from "typesafe-actions";
import { logout } from "../auth/actions";
import { LogoutActionType } from "../auth/types";
import * as actions from "./actions";
import { PhotosState } from "./types";

type PhotosAction = ActionType<typeof actions>;

const initialState: PhotosState = {
  loaded: false,
  loading: false,
  next: null,
  items: []
};

export const photosReducer = createReducer<
  PhotosState,
  PhotosAction | LogoutActionType
>(initialState)
  .handleAction(logout, () => {
    return initialState;
  })
  .handleAction(actions.getPhotosRequest, state => {
    return {
      ...state,
      loaded: false,
      loading: true
    };
  })
  .handleAction(actions.getPhotosRequestSuccess, (state, action) => {
    return {
      ...state,
      loaded: true,
      loading: false,
      next: action.payload.next,
      items: action.payload.items
    };
  })
  .handleAction(actions.getMorePhotosRequestSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      next: action.payload.next,
      items: [...state.items, ...action.payload.items]
    };
  });

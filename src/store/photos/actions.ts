import { createAction } from "typesafe-actions";
import { PhotoItem, PhotosActionTypes } from "./types";

export const getPhotosRequest = createAction(
  PhotosActionTypes.GET_PHOTOS_REQUEST
)<number>();
export const getPhotosRequestSuccess = createAction(
  PhotosActionTypes.GET_PHOTOS_SUCCESS
)<{ next: string | null; items: PhotoItem[] }>();
export const getPhotosRequestFailure = createAction(
  PhotosActionTypes.GET_PHOTOS_FAILURE
)();

export const getMorePhotosRequest = createAction(
  PhotosActionTypes.GET_MORE_PHOTOS_REQUEST
)();
export const getMorePhotosRequestSuccess = createAction(
  PhotosActionTypes.GET_MORE_PHOTOS_SUCCESS
)<{ next: string | null; items: PhotoItem[] }>();
export const getMorePhotosRequestFailure = createAction(
  PhotosActionTypes.GET_MORE_PHOTOS_FAILURE
)();

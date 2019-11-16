export type PhotosState = {
  loading: boolean;
  loaded: boolean;
  next: string | null;
  items: PhotoItem[];
};

export enum PhotosActionTypes {
  GET_PHOTOS_REQUEST = "@@photos/get-photos/request",
  GET_PHOTOS_SUCCESS = "@@photos/get-photos/success",
  GET_PHOTOS_FAILURE = "@@photos/get-photos/failure",

  GET_MORE_PHOTOS_REQUEST = "@@photos/get-more-photos/request",
  GET_MORE_PHOTOS_SUCCESS = "@@photos/get-more-photos/success",
  GET_MORE_PHOTOS_FAILURE = "@@photos/get-more-photos/failure"
}

export type PhotoItem = {
  created: number;
  updated: number;
  originalDate: number;
  preview: string;
  small: string;
  id: string;
};

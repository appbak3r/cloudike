import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { authReducer } from "./auth/reducer";
import { photosReducer } from "./photos/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  photos: photosReducer
});

export type RootState = StateType<typeof rootReducer>;

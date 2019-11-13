import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { authReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = StateType<typeof rootReducer>;

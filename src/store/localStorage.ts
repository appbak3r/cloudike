import merge from "lodash.merge";
import { DeepPartial } from "redux";
import { environment } from "../config/environment";
import { RootState } from "./reducer";

export const getState = (reducerKey?: keyof RootState) => {
  try {
    const savedState =
      JSON.parse(localStorage.getItem(environment.localStorageKey) as string) ||
      {};

    if (reducerKey) {
      return savedState[reducerKey];
    }

    return savedState;
  } catch {
    return {};
  }
};

export const saveState = (state: DeepPartial<RootState>) => {
  const localStorageState = getState();

  localStorage.setItem(
    environment.localStorageKey,
    JSON.stringify(merge(localStorageState, state))
  );
};

import { ErrorsState } from "../../models";
import { ErrorAction } from "../../models/actions";
import { SET_ERROR } from "../actions";

const initialState: ErrorsState = {
  error: "",
};

export const errorsReducer = (
  state: ErrorsState = initialState,
  action: ErrorAction
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.payload,
      };
  }
  return state;
};

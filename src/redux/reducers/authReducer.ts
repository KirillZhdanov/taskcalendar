import { SET_IS_AUTH } from "../actions";

const initialState: any = {
  isAuth: false,
};

export const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, ...action.payload };
  }
  return state;
};

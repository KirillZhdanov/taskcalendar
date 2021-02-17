import { SET_CALENDAR_DATA } from "../actions";

const initialState: any = {
  //isAuth: false,
};

export const calendarReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_CALENDAR_DATA:
      return { ...state, ...action.payload };
  }
  return state;
};

import { CalendarState, CalendarAction } from "../../models";
import { SET_CALENDAR_DATA } from "../actions";

const initialState: CalendarState = {
  tasks: {
    currentDate: "",
    hours: 0,
  },
};

export const calendarReducer = (
  state: CalendarState = initialState,
  action: CalendarAction
) => {
  console.log({ ...action.payload });
  switch (action.type) {
    case SET_CALENDAR_DATA:
      return {
        tasks: { ...action.payload },
      };
  }
  return state;
};

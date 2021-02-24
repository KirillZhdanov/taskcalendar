import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { errorsReducer } from "./errorsReducer";

const rootReducer = combineReducers({
  calendarReducer,
  errorsReducer,
});

export default rootReducer;

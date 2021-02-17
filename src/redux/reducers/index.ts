import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";

const rootReducer = combineReducers({
  authReducer,
  calendarReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shiftReducer from "./shiftReducer";
import addShiftReducer from "./addShiftReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shift: shiftReducer,
  addShift: addShiftReducer,
});

export default rootReducer;

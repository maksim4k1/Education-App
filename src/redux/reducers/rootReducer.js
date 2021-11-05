import { combineReducers } from "redux";
import appReducer from "./appReducer";
import studentsReducer from "./studentsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  students: studentsReducer,
});

export default rootReducer;
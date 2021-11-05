import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import studentsReducer from "./studentsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  students: studentsReducer,
});

export default rootReducer;
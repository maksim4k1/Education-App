import { combineReducers } from "redux";
import newStudentReducer from "./newStudentReducer";
import biologyReducer from "./biologyReducer";
import chemistryReducer from "./chemistryReducer";
import mathReducer from "./mathReducer";
import physicsReducer from "./physicsReduxer";

const studentsReducer = combineReducers({
  math: mathReducer,
  physics: physicsReducer,
  chemistry: chemistryReducer,
  biology: biologyReducer,
  newStudent: newStudentReducer
});

export default studentsReducer;
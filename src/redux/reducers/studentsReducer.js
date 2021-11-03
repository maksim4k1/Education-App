import { combineReducers } from "redux";
import biologyReducer from "./biologyReducer";
import chemistryReducer from "./chemistryReducer";
import mathReducer from "./mathReducer";
import physicsReducer from "./physicsReduxer";

const studentsReducer = combineReducers({
  math: mathReducer,
  physics: physicsReducer,
  chemistry: chemistryReducer,
  biology: biologyReducer,
});

export default studentsReducer;
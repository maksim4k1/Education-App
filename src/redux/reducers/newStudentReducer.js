import stateCreator from "../../utils/stateCreator";
import { ADD_NEW_STUDENT_FAILED, ADD_NEW_STUDENT_LOADING, ADD_NEW_STUDENT_SUCCESS, FAILED, LOADING, SUCCESS } from "../types";

const initialState = {
  ...stateCreator()
}

function newStudentReducer(state=initialState, {type, payload}){
  switch (type) {
    case ADD_NEW_STUDENT_SUCCESS: {
      return {
        ...state,
        ...stateCreator(SUCCESS)
      }
    } case ADD_NEW_STUDENT_LOADING: {
      return {
        ...state,
        ...stateCreator(LOADING)
      }
    } case ADD_NEW_STUDENT_FAILED: {
      return {
        ...state,
        ...stateCreator(FAILED, payload)
      }
    } default: {
      return state;
    }
  }
}

export default newStudentReducer;
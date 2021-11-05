import stateCreator from "../../utils/stateCreator"
import { FAILED, GET_MATH_STUDENTS_FAILED, GET_MATH_STUDENTS_LOADING, GET_MATH_STUDENTS_SUCCESS, LOADING, SUCCESS } from "../types"

const initialState = {
  students: [],
  ...stateCreator()
}

const mathReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case GET_MATH_STUDENTS_SUCCESS: {
      return {
        ...state,
        students: payload,
        ...stateCreator(SUCCESS)
      };
    } case GET_MATH_STUDENTS_LOADING: {
      return {
        ...state,
        ...stateCreator(LOADING)
      };
    } case GET_MATH_STUDENTS_FAILED: {
      return {
        ...state,
        ...stateCreator(FAILED, payload)
      };
    } default: {
      return state;
    }
  }
}

export default mathReducer;
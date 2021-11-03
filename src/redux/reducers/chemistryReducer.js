import stateCreator from "../../utils/stateCreator"
import { FAILED, GET_CHEMISTRY_STUDENTS_FAILED, GET_CHEMISTRY_STUDENTS_LOADING, GET_CHEMISTRY_STUDENTS_SUCCESS, LOADING, SUCCESS } from "../types"

const initialState = {
  students: [],
  ...stateCreator()
}

const chemistryReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case GET_CHEMISTRY_STUDENTS_SUCCESS: {
      return {
        ...state,
        students: payload,
        ...stateCreator(SUCCESS)
      };
    } case GET_CHEMISTRY_STUDENTS_LOADING: {
      return {
        ...state,
        ...stateCreator(LOADING)
      };
    } case GET_CHEMISTRY_STUDENTS_FAILED: {
      return {
        ...state,
        ...stateCreator(FAILED)
      };
    } default: {
      return state;
    }
  }
}

export default chemistryReducer;
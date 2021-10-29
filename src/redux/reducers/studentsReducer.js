import { GET_STUDENTS_BY_ID } from "../types";

const initialState = {
  math: [],
  physics: [],
  chemistry: [],
  biology: [],
}

const studentsReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case GET_STUDENTS_BY_ID: {
      return {
        ...state,
        [payload.name]: payload.value
      }
    }
    default: {
      return state;
    }
  }
}

export default studentsReducer;
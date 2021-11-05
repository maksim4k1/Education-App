import { OPEN_ADD_NEW_STUDENT_MODAL, CLOSE_ADD_NEW_STUDENT_MODAL } from "../types";

const initialState = {
  openAddNewStudentModal: false,
}

function appReducer(state=initialState, {type}){
  switch (type) {
    case OPEN_ADD_NEW_STUDENT_MODAL: {
      return {
        ...state,
        openAddNewStudentModal: true
      };
    } case CLOSE_ADD_NEW_STUDENT_MODAL: {
      return {
        ...state,
        openAddNewStudentModal: false
      };
    } default: {
      return state;
    }
  }
}

export default appReducer;
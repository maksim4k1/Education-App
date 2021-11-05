import { CLOSE_ADD_NEW_STUDENT_MODAL, OPEN_ADD_NEW_STUDENT_MODAL } from "../types";

export function openAddNewStudentModalAction(){
  return {type: OPEN_ADD_NEW_STUDENT_MODAL};
}
export function closeAddNewStudentModalAction(){
  return {type: CLOSE_ADD_NEW_STUDENT_MODAL};
}
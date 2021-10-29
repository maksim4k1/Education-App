import { getData } from "../../utils/requests";
import { GET_STUDENTS_BY_ID } from "../types";

export function getStudentsByIdAction(id){
  return async (dispatch) => {
    const data = await getData(`/students/${id}`);
    dispatch({
      type: GET_STUDENTS_BY_ID,
      payload: {
        name: id,
        value: data
      }
    })
  }
}
import { GET_BIOLOGY_STUDENTS_FAILED, GET_BIOLOGY_STUDENTS_LOADING, GET_BIOLOGY_STUDENTS_SUCCESS, GET_CHEMISTRY_STUDENTS_FAILED, GET_CHEMISTRY_STUDENTS_LOADING, GET_CHEMISTRY_STUDENTS_SUCCESS, GET_MATH_STUDENTS_FAILED, GET_MATH_STUDENTS_LOADING, GET_MATH_STUDENTS_SUCCESS, GET_PHYSICS_STUDENTS_FAILED, GET_PHYSICS_STUDENTS_LOADING, GET_PHYSICS_STUDENTS_SUCCESS } from "../types"

export function getMathStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_MATH_STUDENTS_LOADING});
    const response = await fetch("http://localhost:1717/students/math");
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_MATH_STUDENTS_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_MATH_STUDENTS_FAILED, payload: "Internal Server Error 500. Try again"});
    }
  }
}

export function getPhysicsStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_PHYSICS_STUDENTS_LOADING});
    const response = await fetch("http://localhost:1717/students/physics");
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_PHYSICS_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_PHYSICS_STUDENTS_FAILED, payload: "Internal Server Error 500. Try again"});
    }
  }
}

export function getChemistryStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_CHEMISTRY_STUDENTS_LOADING});
    const response = await fetch("http://localhost:1717/students/chemistry");
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_CHEMISTRY_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_CHEMISTRY_STUDENTS_FAILED, payload: "Internal Server Error 500. Try again"});
    }
  }
}

export function getBiologyStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_BIOLOGY_STUDENTS_LOADING});
    const response = await fetch("http://localhost:1717/students/biology");
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_BIOLOGY_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_BIOLOGY_STUDENTS_FAILED, payload: "Internal Server Error 500. Try again"});
    }
  }
}

export function getStudentsByIdAction(id){
  return (dispatch) => {
    switch (id) {
      case "math": {
        dispatch(getMathStudentsAction());
        break;
      } case "physics": {
        dispatch(getPhysicsStudentsAction());
        break;
      } case "chemistry": {
        dispatch(getChemistryStudentsAction());
        break;
      } case "biology": {
        dispatch(getBiologyStudentsAction());
        break;
      } default: {
        break;
      }
    }
  }
}
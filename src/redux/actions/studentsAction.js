import { getStudentsById } from "../../utils/requests";
import { GET_BIOLOGY_STUDENTS_FAILED, GET_BIOLOGY_STUDENTS_LOADING, GET_BIOLOGY_STUDENTS_SUCCESS, GET_CHEMISTRY_STUDENTS_FAILED, GET_CHEMISTRY_STUDENTS_LOADING, GET_CHEMISTRY_STUDENTS_SUCCESS, GET_MATH_STUDENTS_FAILED, GET_MATH_STUDENTS_LOADING, GET_MATH_STUDENTS_SUCCESS, GET_PHYSICS_STUDENTS_FAILED, GET_PHYSICS_STUDENTS_LOADING, GET_PHYSICS_STUDENTS_SUCCESS } from "../types"

export function getMathStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_MATH_STUDENTS_LOADING});

    const response = await getStudentsById("math");

    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_MATH_STUDENTS_SUCCESS, payload: data});
    } else{
      dispatch({type: GET_MATH_STUDENTS_FAILED, payload: "Internal Server Error 500."});
    }
  }
}

export function getPhysicsStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_PHYSICS_STUDENTS_LOADING});
    
    const response = await getStudentsById("physics");
    
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_PHYSICS_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_PHYSICS_STUDENTS_FAILED, payload: "Internal Server Error 500."});
    }
  }
}

export function getChemistryStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_CHEMISTRY_STUDENTS_LOADING});
        
    const response = await getStudentsById("chemistry");
    
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_CHEMISTRY_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_CHEMISTRY_STUDENTS_FAILED, payload: "Internal Server Error 500."});
    }
  }
}

export function getBiologyStudentsAction(){
  return async (dispatch) => {
    dispatch({type: GET_BIOLOGY_STUDENTS_LOADING});
        
    const response = await getStudentsById("biology");
    
    if(response.ok){
      const data = await response.json();
      dispatch({type: GET_BIOLOGY_STUDENTS_SUCCESS, payload: data});
    } else {
      dispatch({type: GET_BIOLOGY_STUDENTS_FAILED, payload: "Internal Server Error 500."});
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
import { loginByToken, loginRequest } from "../../utils/requests";
import { deleteProfileData, setProfileData } from "../../utils/storage";
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types"

export function loginAction(data){
  return async (dispatch) => {
    dispatch({type: LOGIN_LOADING});

    const response = await loginRequest(data);

    if(response.ok){
      const data = await response.json();

      setProfileData(data.token, data.data);
      dispatch({type: LOGIN_SUCCESS, payload: data});
    } else{
      dispatch({type: LOGIN_FAILED, payload: "User not found. Try Again"});
    }
  }
}

export function loginByTokenAction(token){
  return async (dispatch) => {
    dispatch({type: LOGIN_LOADING});

    const response = await loginByToken(token);

    if(response.ok){
      const profileData = await response.json();

      const data = {
        token,
        data: profileData
      };

      dispatch({type: LOGIN_SUCCESS, payload: data});
    } else{
      dispatch({type: LOGIN_FAILED, payload: "Internal Server Error 500. Try again"});
    }
  }
}

export function logoutAction(){
  deleteProfileData();
  return {type: LOGOUT_SUCCESS};
}
import { loginRequest } from "../../utils/requests";
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../types"

export function loginAction(data){
  return async (dispatch) => {
    dispatch({type: LOGIN_LOADING});

    const response = await loginRequest(data);

    if(response.ok){
      const data = await response.json();

      dispatch({type: LOGIN_SUCCESS, payload: data});
    } else{
      dispatch({type: LOGIN_FAILED, payload: "Такого пользователя не найдено"});
    }
  }
}
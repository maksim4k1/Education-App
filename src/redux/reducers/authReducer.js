import stateCreator from "../../utils/stateCreator";
import { FAILED, LOADING, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, SUCCESS } from "../types";

const initialState = {
  isAuth: false,
  profile: {},
  ...stateCreator()
}

function authReducer(state=initialState, {type, payload}){
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...stateCreator(SUCCESS),
        isAuth: true,
        profile: payload
      }
    } case LOGIN_LOADING: {
      return {
        ...state,
        ...stateCreator(LOADING),
        isAuth: false,
        profile: {}
      }
    } case LOGIN_FAILED: {
      return {
        ...state,
        ...stateCreator(FAILED, payload),
        isAuth: false,
        profile: {}
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
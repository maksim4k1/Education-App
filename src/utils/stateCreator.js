import { FAILED, LOADING, SUCCESS } from "../redux/types";

const stateCreator = (type, error) => {
  switch(type){
    case SUCCESS: {
      return {
        success: true,
        loading: false,
        failed: false,
        error: "",
      }
    } case LOADING: {
      return {
        success: true,
        loading: true,
        failed: false,
        error: "",
      }
    } case FAILED: {
      return {
        success: true,
        loading: false,
        failed: true,
        error: error,
      }
    } default: {
      return {
        success: false,
        loading: false,
        failed: false,
        error: ""
      }
    }
  }
}

export default stateCreator;
import {
  SET_TOKEN,
  SET_USER,
  SIGNIN_SUCCESS,
  SIGNIN_START,
  SIGNIN_FAILURE,
} from '../actions/ActionTypes';
const initialState = {
  token: '',
  user: null,
  isSigningIn: false,
  signInSuccess: null,
  signInFailure: null,
};

function authReducer(currentState = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...currentState,
        token: action.payload.token,
      };
    case SET_USER:
      return {
        currentState,
        user: action.payload.user,
      };
    case SIGNIN_START:
      return {
        ...currentState,
        isSigningIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...currentState,
        isSigningIn: false,
        signInSuccess: {},
      };
    case SIGNIN_FAILURE:
      return {
        ...currentState,
        isSigningIn: false,
        signInFailure: {},
      };
    default:
      return currentState;
  }
}
export default authReducer;

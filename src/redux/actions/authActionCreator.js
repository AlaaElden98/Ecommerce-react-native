import {
  SET_TOKEN,
  SET_USER,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './ActionTypes';
import axios from 'axios';

export const setToken = (token) => ({type: SET_TOKEN, payload: {token}});
export const setUser = (user) => ({type: SET_USER, payload: {user}});

const signInStart = () => ({type: SIGNIN_START});
const signInSuccess = () => ({type: SIGNIN_SUCCESS});
const signInFailure = () => ({type: SIGNIN_FAILURE});

export const signIn = (phone) => {
  return (dispatch, getState) => {
    dispatch(signInStart());
    axios
      .post('/verify', {phone})
      .then((response) => {
        dispatch(signInSuccess());
        console.log(response.data);
        //navigation.navigate('ConfirmationCodeScreen', {phone});
      })
      .catch((error) => {
        dispatch(signInFailure());
        console.log('err', error);
      });
  };
};

import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const SET_CART_ITEMS = (payload) => ({
  type: ActionTypes.SET_CART_ITEMS,
  payload: payload,
});
export const fetchCartItems = () => {
  return (dispatch, getState) => {
    axios.get('cart').then((res) => {
      dispatch(SET_CART_ITEMS(res));
    });
  };
};

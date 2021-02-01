import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {totalSelector} from '../selectors';

const SET_CART_ITEMS = (payload) => ({
  type: ActionTypes.SET_CART_ITEMS,
  payload: payload,
});

const MAKE_ORDER = () => ({
  type: ActionTypes.MAKE_ORDER,
});
export const fetchCartItems = () => {
  return (dispatch, getState) => {
    axios.get('cart').then((res) => {
      dispatch(SET_CART_ITEMS(res));
    });
  };
};

export const makeOrder = () => {
  return (dispatch, getState) => {
    const selectedAddressId = getState().auth.selectedAddressId;
    const items = getState().cart.cartItems.map((item) => item._id);
    const total = totalSelector(getState());
    axios
      .post('/order', {
        paymenMethod: 1,
        items,
        shippingAddress: selectedAddressId,
        totalCost: total,
      })
      .then((res) => dispatch(MAKE_ORDER()));
  };
};

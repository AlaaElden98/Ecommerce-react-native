import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload.data.items,
      };
    default:
      return state;
  }
}

export default cartReducer;

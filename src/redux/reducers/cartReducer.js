import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  cartItems: [],
  makeOrderSuccess: null,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload.data.items,
      };
    case ActionTypes.MAKE_ORDER:
      return {
        ...state,
        makeOrderSuccess: {},
      };
    default:
      return state;
  }
}

export default cartReducer;

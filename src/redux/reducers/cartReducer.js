import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  cartItems: [],
  makeOrderSuccess: null,
  isAddingProductToCart: {},
  addProductToCartError: null,
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
    case ActionTypes.SET_ADDING_PRODUCT_TO_CART:
      return {
        ...state,
        isAddingProductToCart: {
          [action.payload.productId]: true,
        },
      };

    case ActionTypes.CLEAR_ADDING_PRODUCT_TO_CART:
      return {
        ...state,
        isAddingProductToCart: {
          [action.payload.productId]: false,
        },
      };

    case ActionTypes.ADD_PRODUCT_TOCART_ERROR:
      return {
        ...state,
        addProductToCartError: {errorCode: action.payload.errorCode},
      };

    default:
      return state;
  }
}

export default cartReducer;

import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_HOME_CATEGORY:
      return {
        ...state,
        home: {
          ...state.home,
          categories: action.payload.data.cats,
        },
      };
    case ActionTypes.SET_HOME_PRODUCTS:
      return {
        ...state,
        home: {
          ...state.home,
          products: action.payload.data.products,
        },
      };

    default:
      return state;
  }
}

export default homeReducer;

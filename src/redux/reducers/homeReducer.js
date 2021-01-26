import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
  childrenCategories: {},
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
    case ActionTypes.SET_CHILDREN_CATEGORIES:
      return {
        ...state,
        childrenCategories: {
          ...state.childrenCategories,
          [action.payload.data.children[0].parentId]:
            action.payload.data.children,
        },
      };

    default:
      return state;
  }
}

export default homeReducer;

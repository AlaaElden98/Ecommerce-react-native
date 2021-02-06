import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  home: {
    categories: [],
    products: [],
  },
  childrenCategories: {},
  categoryProducts: {},
  categoryProductsNextPages: {},
  product: null,
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
    case ActionTypes.APPEND_PRODUCTS:
      const catId = action.payload.categoryId;

      return {
        ...state,
        categoryProducts: {
          ...state.categoryProducts,
          [catId]: (state.categoryProducts[catId] || []).concat(
            action.payload.products,
          ),
        },
      };

    case ActionTypes.SET_CATEGORY_PRODUCTS_PAGE:
      return {
        ...state,
        categoryProductsNextPages: {
          ...state.categoryProductsNextPages,
          [action.payload.categoryId]: action.payload.nextPage,
        },
      };
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload.data.product,
      };
    default:
      return state;
  }
}

export default homeReducer;

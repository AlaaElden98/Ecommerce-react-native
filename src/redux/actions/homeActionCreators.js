import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const HOME_CATEGORY = (payload) => ({
  type: ActionTypes.SET_HOME_CATEGORY,
  payload: payload,
});
const PRODUCT_CATEGORY = (payload) => ({
  type: ActionTypes.SET_HOME_PRODUCTS,
  payload: payload,
});

const SET_CHILDREN_CATEGORIES = (payload) => ({
  type: ActionTypes.SET_CHILDREN_CATEGORIES,
  payload: payload,
});
const SET_PRODUCT = (payload) => ({
  type: ActionTypes.SET_PRODUCT,
  payload: payload,
});
export const fetchHomeData = () => {
  return (dispatch, getState) => {
    dispatch(fetchHomeCategories());
    dispatch(fetchHomeProducts());
  };
};

export const fetchHomeCategories = () => {
  return (dispatch, getState) => {
    axios.get('/category/get-parents').then((res) => {
      dispatch(HOME_CATEGORY(res));
    });
  };
};

export const fetchHomeProducts = () => {
  return (dispatch, getState) => {
    axios.get('/product/best-seller').then((res) => {
      dispatch(PRODUCT_CATEGORY(res));
    });
  };
};
export const fetchChildrenCategroies = (categoryId) => {
  return (dispatch, getState) => {
    axios.get('/category/get-children/' + categoryId).then((res) => {
      dispatch(SET_CHILDREN_CATEGORIES(res));
    });
  };
};
export const fetchProductById = (id) => {
  return (dispatch, getState) => {
    axios.get('/product-by-id/' + id).then((res) => {
      dispatch(SET_PRODUCT(res));
    });
  };
};
export const appendProducts = (categoryId, products) => ({
  type: ActionTypes.APPEND_PRODUCTS,
  payload: {categoryId, products},
});

export const setCategoryProductsPage = (categoryId, nextPage) => ({
  type: ActionTypes.SET_CATEGORY_PRODUCTS_PAGE,
  payload: {categoryId, nextPage},
});

export const fetchCategoryProducts = (category) => {
  return (dispatch, getState) => {
    const endPoint = category.parentId
      ? '/product/category/'
      : '/product/parent-category/';

    const calculatedPage = getState().home.categoryProductsNextPages[
      category._id
    ];

    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage;

    if (nextRequestPage) {
      axios
        .get(endPoint, {params: {id: category._id, page: nextRequestPage}})
        .then((res) => {
          dispatch(appendProducts(category._id, res.data.data));

          const {lastPage, nextPage} = res.data;
          const page = nextPage > lastPage ? null : nextPage;
          dispatch(setCategoryProductsPage(category._id, page));
        })
        .catch(() => {});
    }
  };
};

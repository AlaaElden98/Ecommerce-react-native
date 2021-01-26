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

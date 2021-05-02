import axios from 'axios';
import {config} from 'api-request-biolerplate-actions';
import store from '../redux/store';
import {BASE_URL} from './constants';
import {errorCodeMessageMapper} from './errorCodes';

export const getActualPrice = (price, discount) => {
  if (discount) {
    return price - price * discount;
  }
  return price;
};

export const configureAxios = () => {
  axios.defaults.baseURL = BASE_URL;
};

export const configureApiRequestBoilerplateActions = () => {
  config(store.dispatch, BASE_URL);
};

export const showError = (errorCode) => {
  // eslint-disable-next-line no-alert
  alert(errorCodeMessageMapper[errorCode]);
};

export const cutLongName = (name, maxChars = 12) => {
  if (name.length > maxChars) {
    return name.slice(0, maxChars - 3) + '...';
  }

  return name;
};

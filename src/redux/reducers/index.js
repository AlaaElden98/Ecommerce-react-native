import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  cart: cartReducer,
  search: searchReducer,
});

const appReducer = (state, action) => {
  if (action.type === CLEAR_REDUX_DATA) {
    return rootReducer(undefined, action);
  } else {
    return rootReducer(state, action);
  }
};

export default appReducer;

import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';
import authReducer from './authReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  auth: authReducer,
});

const appReducer = (state, action) => {
  if (action.type === CLEAR_REDUX_DATA) {
    return rootReducer(undefined, action);
  } else return rootReducer(state, action);
};

export default appReducer;

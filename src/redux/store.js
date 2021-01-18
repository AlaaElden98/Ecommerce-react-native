import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reactotron from '../../ReactotronConfig';

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export default store;

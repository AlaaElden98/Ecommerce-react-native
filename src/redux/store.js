import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reactotron from '../../ReactotronConfig';
import appReducer from './reducers';

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export default store;

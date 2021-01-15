import React from 'react';
import {AppContainer} from './src/navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from './src/utils/constants';
import {connect, useSelector, useDispatch} from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  const setToken = (token) => dispatch({type: 'SET_TOKEN', payload: {token}});
  const setUser = (user) => dispatch({type: 'SET_USER', payload: {user}});
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    //AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      setToken(val);
      axios.defaults.headers.Authorization = 'Bearer ' + val;
      AsyncStorage.getItem(USER_KEY).then((user) => {
        setUser(JSON.parse(user));
      });
    });
  }, []);

  return token !== '' && <AppContainer isAuthanticated={!!token} />;
}
export default App;

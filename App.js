import React from 'react';
import {AppContainer} from './src/navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from './src/utils/constants';
import {useSelector, useDispatch} from 'react-redux';
import {
  setToken,
  setUser,
  getUserData,
  fetchCartItems,
} from './src/redux/actions';
function App(props) {
  //TODO : handle API's requests error
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    //AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then((tokenValue) => {
      dispatch(setToken(tokenValue));
      axios.defaults.headers.Authorization = 'Bearer ' + tokenValue;
      dispatch(fetchCartItems());
      AsyncStorage.getItem(USER_KEY).then((user) => {
        dispatch(setUser(JSON.parse(user)));
        dispatch(getUserData());
      });
    });
  }, [token]);

  return token !== '' && <AppContainer isAuthanticated={!!token} />;
}
export default App;

import React from 'react';
import {AppContainer} from './src/navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from './src/utils/constants';
import {useSelector, useDispatch} from 'react-redux';
import {setToken, setUser} from './src/redux/actions';

function App(props) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    //AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      dispatch(setToken(val));
      axios.defaults.headers.Authorization = 'Bearer ' + val;
      AsyncStorage.getItem(USER_KEY).then((user) => {
        dispatch(setUser(JSON.parse(user)));
      });
    });
  }, []);

  return token !== '' && <AppContainer isAuthanticated={!!token} />;
}
export default App;

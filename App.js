import React from 'react';
import {Button, View, Text} from 'react-native';
import {AppContainer} from './src/navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from './src/utils/constants';
export default function App() {
  const [token, setToken] = React.useState();
  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      setToken(val);
      axios.defaults.headers.Authorization = 'Bearer ' + val;
    });
  }, []);

  return !!token && <AppContainer isAuthanticated={!!token} />;
}

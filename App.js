import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppContainer} from './src/navigation';
export default function App() {
  return <AppContainer isAuthanticated={true} />;
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

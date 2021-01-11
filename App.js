import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OrdersScreen} from './src/screens/Orders';
import {CartScreen} from './src/screens/Cart'
export default function App() {
  return <OrdersScreen />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

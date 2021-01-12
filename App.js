import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OrdersScreen} from './src/screens/Orders';
import {CartScreen} from './src/screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <OrdersScreen />
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

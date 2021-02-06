import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/Cart';
import {ProductScreen} from '../screens/Product';
import {CheckOutScreen} from '../screens/CheckOut';
import {AddAddressScreen} from '../screens/AddAddress';

const Stack = createStackNavigator();

export function CartStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({headerShown: false}, {headerBackTitleVisible: false})}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
}

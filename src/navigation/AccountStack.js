import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/Account';
import {AddAddressScreen} from '../screens/AddAddress';
import {UpdateAccountScreen} from '../screens/UpdateAccount';
import {OrdersScreen} from '../screens/Orders';
const Stack = createStackNavigator();

export function AccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={
          ({headerShown: false},
          {headerBackTitleVisible: false},
          {title: 'Account'})
        }
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{title: 'Add address'}}
      />
      <Stack.Screen
        name="UpdateAccountScreen"
        component={UpdateAccountScreen}
        options={{headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={
          ({headerBackTitleVisible: false}, {title: 'Your previous orders'})
        }
      />
    </Stack.Navigator>
  );
}

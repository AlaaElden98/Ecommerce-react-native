import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home';
import {SearchScreen} from '../screens/Search';
import {CartScreen} from '../screens/Cart';
import {AccountScreen} from '../screens/Account';
import {IonIcon} from '../components/IonIcons';
import {Text} from 'react-native';
import {TINT_COLOR} from '../utils/colors';
import {HomeStack} from './HomeStack';
import {CartStack} from './CartStack';
import {SearchStack} from './SearchStack';
import {AccountStack} from './AccountStack'

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconName = {
          HomeStack: 'home',
          CartStack: 'cart',
          SearchStack: 'search',
          AccountStack: 'person',
        };
        const label = {
          HomeStack: 'Home',
          CartStack: 'Cart',
          SearchStack: 'Search',
          AccountStack: 'Account',
        };
        return {
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? TINT_COLOR : 'black', fontSize: 18}}>
              {label[route.name]}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={iconName[route.name]}
              style={{color: focused ? TINT_COLOR : 'black', fontSize: 24}}
            />
          ),
        };
      }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      <Tabs.Screen name="CartStack" component={CartStack} />
      <Tabs.Screen name="SearchStack" component={SearchStack} />
      <Tabs.Screen name="AccountStack" component={AccountStack} />
    </Tabs.Navigator>
  );
}

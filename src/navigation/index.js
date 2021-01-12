import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HomeTabs} from './HomeTabs';

export function AppContainer(props) {
  const {isAuthanticated} = props;
  return (
    <NavigationContainer>
      {isAuthanticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

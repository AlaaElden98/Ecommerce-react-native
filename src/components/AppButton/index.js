import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {PlatFormTouchable} from '../PlatFormTouchable';

import styles from './styles';

export function AppButton(props) {
  const {title, wrapperStyle, titleStyle, isLoading, disabled, ...rest} = props;
  return (
    <PlatFormTouchable
      {...rest}
      disabled={disabled || isLoading}
      style={[styles.wrapper, wrapperStyle, disabled ? styles.disabled : null]}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </PlatFormTouchable>
  );
}

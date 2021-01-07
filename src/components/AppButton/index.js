import React from 'react';
import {Text} from 'react-native';
import {PlatFormTouchable} from '../PlatFormTouchable';

import styles from './styles';

export function AppButton(props) {
  const {title,wrapperStyle, titleStyle,...rest} = props;
  return (
    <PlatFormTouchable {...rest} style={[styles.wrapper,wrapperStyle]}>
      <Text style={[styles.title,titleStyle]}>{title}</Text>
    </PlatFormTouchable>
  );
}

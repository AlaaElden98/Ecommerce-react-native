/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {IonIcon} from '../IonIcons';
import {TINT_COLOR} from '../../utils/colors';

export const Input = (props) => {
  const {
    underlined,
    border,
    underlinedHeight,
    underlinedColor,
    borderColor,
    borderWidth,
    borderRadius,
    placeholderPosition,
    renderIconLeft,
    renderIconRight,
    stacked,
    placeholder,
    style,
    wrapperStyle,
    iconWrapper,
    showValidationFeedback,
    isValid,
    toched,
    ...rest
  } = props;
  return (
    <View
      style={[
        border && {
          borderColor: borderColor || '#bbb',
          borderRadius: borderRadius || 5,
          borderWidth: borderWidth || 1,
        },
        wrapperStyle,
      ]}>
      {stacked && <Text style={{color: '#bbb'}}>{placeholder}</Text>}
      <View style={{flexDirection: 'row'}}>
        {renderIconLeft && (
          <View style={[styles.iconWrapper, iconWrapper]}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          {...rest}
          placeholder={stacked ? '' : placeholder}
          style={[
            {
              flex: 1,
              padding: 0,
              textAlign: placeholderPosition || 'left',
            },
            style,
          ]}
        />
        {renderIconRight && (
          <View style={[styles.iconWrapper, iconWrapper]}>
            {renderIconRight()}
          </View>
        )}
        {showValidationFeedback && toched && (
          <IonIcon
            style={{fontSize: 25, color: isValid ? TINT_COLOR : 'red'}}
            name={isValid ? 'checkmark' : 'close'}
          />
        )}
      </View>
      {(underlined || stacked) && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColor || '#bbbbbb80',
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

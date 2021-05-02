import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

export class PlatFormTouchable extends React.Component {
  render() {
    const {style, children, ...rest} = this.props;

    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
      <Touchable {...rest}>
        <View style={style}>{children}</View>
      </Touchable>
    );
  }
}

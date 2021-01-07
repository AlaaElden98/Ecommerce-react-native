import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';

function renderIcon() {
  return <Icon name="call-outline" style={styles.icon} />;
}

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Your Phone Number</Text>
      </View>
      <Input
        style={styles.input}
        underlined
        renderIconLeft={renderIcon}
        placeholder="Phone"
        wrapperStyle={styles.inputWrapper}
        iconWrapper={styles.iconWrapper}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" />
      </View>
    </View>
  );
}

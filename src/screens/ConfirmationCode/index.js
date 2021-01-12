import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {Input} from '../../components/Input';
import styles from './styles';

export function ConfirmationCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        style={styles.input}
        border
        placeholder="__ __ __ __"
        wrapperStyle={styles.inputWrapper}
        placeholderPosition="center"
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" />
      </View>
    </SafeAreaView>
  );
}

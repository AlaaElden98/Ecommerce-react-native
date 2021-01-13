import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {Input} from '../../components/Input';
import styles from './styles';
import {useInput} from '../../utils/useInput';

export function ConfirmationCodeScreen(props) {
  const [input, updateInput] = useInput('', [{key: 'isConfirmationCode'}]);

  const doneHandler = () => {
    if (!input.isValid) {
      alert('the confirmation code is not correct');
    }
  };
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
        onChangeText={updateInput}
        onSubmitEditing={doneHandler}
        keyboardType="numeric"
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" onPress={doneHandler} />
      </View>
    </SafeAreaView>
  );
}

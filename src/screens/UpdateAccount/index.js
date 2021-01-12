import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

export function UpdateAccountScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input placeholder="Name" stacked wrapperStyle={styles.input} />
        <Input placeholder="Phone" stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title="SAVE" />
    </SafeAreaView>
  );
}

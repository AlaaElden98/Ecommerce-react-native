import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';

export function AddAddressScreen(props) {
  const [inputs, setInputs] = React.useState({});

  const highOrderSetInput = (key) => {
    return (value) => {
      setInputs({...inputs, [key]: value});
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('name')}
        />
        <Input
          placeholder="Phone"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('phone')}
        />
        <Input
          placeholder="City"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('city')}
        />
        <Input
          placeholder="Area"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('area')}
        />
        <Input
          placeholder="Street"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('street')}
        />
        <Input
          placeholder="Building"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('building')}
        />
      </View>

      <AppButton title="ADD" />
    </SafeAreaView>
  );
}

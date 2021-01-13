import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
function renderIcon() {
  return <Icon name="call-outline" style={styles.icon} />;
}

export function SignInScreen(props) {
  const {navigation} = props;

  const [input, updateInput] = useInput('', [{key: 'isPhone'}]);

  const doneHandler = () => {
    if (!input.isValid) {
      alert('The phone you entered is not correct');
      return;
    }

    navigation.navigate('ConfirmationCodeScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
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
        onChangeText={updateInput}
        keyboardType="numeric"
        onSubmitEditing={doneHandler}
        showValidationFeedback
        toched={input.touched}
        isValid={input.isValid}
      />
      <View style={styles.buttonWrapper}>
        <AppButton title="DONE" onPress={doneHandler} />
      </View>
    </SafeAreaView>
  );
}

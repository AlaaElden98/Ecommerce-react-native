import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {useInput} from '../../utils/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';

function renderIcon() {
  return <Icon name="call-outline" style={styles.icon} />;
}

export function SignInScreen(props) {
  const {navigation} = props;
  const isLoading = useSelector((state) => state.auth.isSigningIn);
  const success = useSelector((state) => state.auth.signInSuccess);
  const dispatch = useDispatch();
  const [input, updateInput] = useInput('', [{key: 'isPhone'}]);

  useUpdateEffect(() => {
    navigation.navigate('ConfirmationCodeScreen', {phone: input.value});
  }, [success]);

  // useUpdateEffect(() => {
  //   showError(failure.errorCode);
  // }, [failure]);

  const doneHandler = () => {
    if (input.isValid) {
      dispatch(signIn(input.value));
    }
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
        editable={!isLoading}
      />
      <View style={styles.buttonWrapper}>
        <AppButton
          title="DONE"
          onPress={doneHandler}
          disabled={!input.isValid}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

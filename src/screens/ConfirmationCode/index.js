import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {Input} from '../../components/Input';
import styles from './styles';
import {useInput} from '../../utils/useInput';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from '../../utils/constants';
import {connect} from 'react-redux';
function ConfirmationCodeScreen(props) {
  const [input, updateInput] = useInput('', [{key: 'isConfirmationCode'}]);
  const [isLoading, setIsLoading] = React.useState(false);
  const {setToken, setUser} = props;

  const {phone} = props.route.params;
  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone: phone, code: input.value})
        .then((response) => {
          console.log(response.data);
          const {token, userData} = response.data;
          axios.defaults.headers.Authorization = 'Bearer ' + token;
          setToken(token);
          setUser(userData);
          AsyncStorage.setItem(TOKEN_KEY, token);
          AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
          console.log(userData);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
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
const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch({type: 'SET_TOKEN', payload: {token}}),
  setUser: (user) => dispatch({type: 'SET_USER', payload: {user}}),
});
export default connect(null, mapDispatchToProps)(ConfirmationCodeScreen);

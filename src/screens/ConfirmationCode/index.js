import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {Input} from '../../components/Input';
import styles from './styles';
import {useInput} from '../../utils/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {confirmCode} from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions';
import {errorCodeMessageMapper} from '../../utils/errorCodes';

function ConfirmationCodeScreen(props) {
  const {phone} = props.route.params;
  const [input, updateInput] = useInput('', [{key: 'isConfirmationCode'}]);
  const isLoading = useSelector((state) => state.auth.isConfirmingCode);
  const failure = useSelector((state) => state.auth.confirmCodeFailure);

  const dispatch = useDispatch();

  useUpdateEffect(() => {
    showError(errorCodeMessageMapper[failure.errorCode]);
  }, [failure]);

  const doneHandler = () => {
    if (input.isValid) {
      dispatch(confirmCode(phone, input.value));
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
export default ConfirmationCodeScreen;

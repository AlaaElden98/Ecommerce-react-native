import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {updateUserName} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import styles from './styles';

export function UpdateAccountScreen(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [name, setName] = React.useState('');
  const success = useSelector((state) => state.auth.updateUserNameSuccess);
  useUpdateEffect(() => {
    navigation.goBack();
  }, [success]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={setName}
        />
        <Input placeholder="Phone" stacked wrapperStyle={styles.input} />
      </View>

      <AppButton title="SAVE" onPress={() => dispatch(updateUserName(name))} />
    </SafeAreaView>
  );
}

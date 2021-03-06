import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import {addAddress} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {Address} from '../../components/Address';

import styles from './styles';

export function AddAddressScreen(props) {
  const {navigation} = props;
  const [inputs, setInputs] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const success = useSelector((state) => state.auth.addAddressSuccess);
  const isLoading = useSelector((state) => state.auth.addAddressLoading);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useUpdateEffect(() => {
    setInputs({});
  }, [success]);

  const highOrderSetInput = (key) => {
    return (value) => {
      setInputs({
        ...inputs,
        [key]: value,
      });
    };
  };

  React.useEffect(() => {
    setIsValid(
      inputs.name &&
        inputs.phone &&
        inputs.city &&
        inputs.area &&
        inputs.street &&
        inputs.building,
    );
  }, [inputs]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input
          placeholder="Name"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('name')}
          value={inputs.name || ''}
        />
        <Input
          placeholder="Phone"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('phone')}
          value={inputs.phone || ''}
        />
        <Input
          placeholder="City"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('city')}
          value={inputs.city || ''}
        />
        <Input
          placeholder="Area"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('area')}
          value={inputs.area || ''}
        />
        <Input
          placeholder="Street"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('street')}
          value={inputs.street || ''}
        />
        <Input
          placeholder="Building"
          stacked
          wrapperStyle={styles.input}
          onChangeText={highOrderSetInput('building')}
          value={inputs.building || ''}
        />
        <Text style={styles.headerTitle}>Your previous addresses</Text>
        {user.addresses.map((address) => {
          return <Address address={address} />;
        })}
      </ScrollView>

      <AppButton
        title="ADD"
        onPress={() => {
          // eslint-disable-next-line no-sequences
          dispatch(addAddress(inputs)), navigation.goBack();
        }}
        isLoading={isLoading}
        disabled={!isValid}
      />
    </SafeAreaView>
  );
}

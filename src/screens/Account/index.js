import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {IonIcon} from '../../components/IonIcons';
import styles from './styles';
import {PlatFormTouchable} from '../../components/PlatFormTouchable';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../redux/actions';

function renderInfoSection(user, navigation) {
  console.log(user.name);
  return (
    <View style={styles.infoSection}>
      <IonIcon name="person" style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text
          onPress={() => {
            !user.name && navigation.navigate('UpdateAccountScreen');
          }}
          style={[styles.infoText, !user.name && styles.hitToEnterNameButton]}>
          {user.name || 'HIT to enter name'}
        </Text>
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>
    </View>
  );
}

function renderButton(iconName, title, onPress) {
  return (
    <PlatFormTouchable style={styles.button} onPress={onPress}>
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={iconName} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.horizontalLine} />
    </PlatFormTouchable>
  );
}

function renderButtonsSection(navigation, onDispatchLogOut) {
  return (
    <View>
      {renderButton('person', 'Profile', () =>
        navigation.navigate('UpdateAccountScreen'),
      )}
      {renderButton('locate', 'Shipping Address', () =>
        navigation.navigate('AddAddressScreen'),
      )}
      {renderButton('cart', 'Previous Orders', () =>
        navigation.navigate('OrdersScreen'),
      )}
      {renderButton('log-out', 'Log Out', onDispatchLogOut)}
    </View>
  );
}

function AccountScreen(props) {
  const {navigation} = props;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const onDispatchLogOut = () => dispatch(logOut());
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        {renderInfoSection(user, navigation)}
        {renderButtonsSection(navigation, onDispatchLogOut)}
      </View>
    </SafeAreaView>
  );
}
export default AccountScreen;

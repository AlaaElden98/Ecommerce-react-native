import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {IonIcon} from '../../components/IonIcons';
import styles from './styles';
import {PlatFormTouchable} from '../../components/PlatFormTouchable';
import {connect} from 'react-redux';
function renderInfoSection(user) {
  return (
    <View style={styles.infoSection}>
      <IonIcon name="person" style={styles.personIcon} />
      <View style={styles.verticalLine} />
      <View>
        <Text style={styles.infoText}>{user.name || 'Edit your info'}</Text>
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

function renderButtonsSection(navigation) {
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
      {renderButton('log-out', 'Log Out', () => {})}
    </View>
  );
}

function AccountScreen(props) {
  const {navigation, user} = props;
  console.log('AccountScreenUser', user);

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        {renderInfoSection(user)}
        {renderButtonsSection(navigation)}
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => ({user: state.auth.user});
export default connect(mapStateToProps)(AccountScreen);

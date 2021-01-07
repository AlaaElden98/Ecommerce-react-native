import React from 'react';
import {View, Text} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {AppButton} from '../../components/AppButton';
import {dummyCartItem} from '../../utils/dummyData';
import styles from './styles';
export function CartScreen(props) {
  return (
    <View style={styles.container}>
      <CartItem cartItem={dummyCartItem} />
      <View style={styles.wrapperWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.totalText}>Total = 3456 $</Text>
          <AppButton title="CHECKOUT" titleStyle={styles.checkOutText} />
        </View>
      </View>
    </View>
  );
}

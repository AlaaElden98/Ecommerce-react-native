import React from 'react';
import {View, Text} from 'react-native';
import {IonIcon} from '../IonIcons';
import {useSelector} from 'react-redux';
import styles from './styles';

export function TabCartIcon(props) {
  const {focused} = props;
  const cartItemsCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <View>
      <IonIcon
        name="cart"
        style={[styles.icon, focused && styles.focusedIcon]}
      />
      <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>{cartItemsCount}</Text>
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {AppButton} from '../../components/AppButton';
import {useSelector} from 'react-redux';
import styles from './styles';

function renderItem({item}) {
  return <CartItem cartItem={item} />;
}
function renderCartItems(cartItems) {
  return <FlatList data={cartItems} renderItem={renderItem} />;
}

export function CartScreen(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <SafeAreaView style={styles.container}>
      {renderCartItems(cartItems)}
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>Total = 3456 $</Text>
        <AppButton title="CHECKOUT" titleStyle={styles.checkOutText} />
      </View>
    </SafeAreaView>
  );
}

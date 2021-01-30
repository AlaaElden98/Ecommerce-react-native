import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {AppButton} from '../../components/AppButton';
import {useSelector} from 'react-redux';
import {totalSelector} from '../../redux/selectors';
import styles from './styles';

function renderItem({item}) {
  return <CartItem cartItem={item} />;
}
function renderCartItems(cartItems) {
  return <FlatList data={cartItems} renderItem={renderItem} />;
}

export function CartScreen(props) {
  const {navigation} = props;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector(totalSelector);

  return (
    <SafeAreaView style={styles.container}>
      {renderCartItems(cartItems)}
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>Total = ${total} $</Text>
        <AppButton
          title="CHECKOUT"
          titleStyle={styles.checkoutText}
          onPress={() => {
            navigation.navigate('CheckOutScreen');
          }}
          disabled={cartItems.length === 0}
        />
      </View>
    </SafeAreaView>
  );
}

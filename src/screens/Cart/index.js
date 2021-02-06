import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {AppButton} from '../../components/AppButton';
import {useSelector} from 'react-redux';
import {totalSelector} from '../../redux/selectors';
import {EmptyList} from '../../components/EmptyList';
import {IonIcon} from '../../components/IonIcons';
import styles from './styles';

function EmptyCart() {
  return (
    <EmptyList
      renderIcon={() => <IonIcon name="cart" style={styles.cartIcon} />}
      renderText={() => <Text style={styles.emptyText}>Empty Cart</Text>}
    />
  );
}

function renderItem({item}) {
  return <CartItem cartItem={item} />;
}
function renderCartItems(cartItems) {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={cartItems}
      renderItem={renderItem}
      ListEmptyComponent={EmptyCart}
    />
  );
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

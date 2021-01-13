import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {Order} from '../../components/Order';
import {dummyOrders} from '../../utils/dummyData';
import styles from './styles';
function renderOrder({item}) {
  return <Order order={item} />;
}
function renderOrdersList(orders) {
  return <FlatList data={orders} renderItem={renderOrder} />;
}
export function OrdersScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      {renderOrdersList(dummyOrders)}
    </SafeAreaView>
  );
}
import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {Order} from '../../components/Order';
import {getOrders} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {EmptyList} from '../../components/EmptyList';
// import {showError} from '../../utils/helperFunctions';

import styles from './styles';
function renderOrder({item}) {
  return <Order order={item} />;
}
function renderOrders(orders, Empty) {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={orders}
      renderItem={renderOrder}
      ListEmptyComponent={Empty}
      keyExtractor={keyExtractor}
    />
  );
}
function keyExtractor(order) {
  return order._id;
}

export function OrdersScreen(props) {
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.auth.getOrdersError);
  const orders = useSelector((state) => state.auth.orders);

  const Empty = React.useCallback(
    () => (orders.length === 0 ? <EmptyList /> : null),
    [orders.length],
  );

  React.useEffect(() => {
    dispatch(getOrders());
  }, []);

  // useUpdateEffect(() => {
  //   showError(error.errorCode);
  // }, [error]);

  return <View style={styles.container}>{renderOrders(orders, Empty)}</View>;
}

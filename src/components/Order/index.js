import React from 'react';
import {Image, View, Text} from 'react-native';
import {Card} from '../Card';
import {Price} from '../Price';
import styles from './styles';

export function Order(props) {
  const {order} = props;

  return (
    <Card style={styles.container}>
      <Image
        source={{uri: order.cartItems.imageUrl}}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{order.cartItems.title}</Text>
        <Price price={order.cost} />
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>
    </Card>
  );
}

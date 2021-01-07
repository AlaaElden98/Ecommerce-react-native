import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import {Card} from '../Card';
export function CartItem(props) {
  const {cartItem} = props;
  return (
    <Card style={styles.container}>
      <Image source={{uri: cartItem.product.imageUrl}} style={styles.image} />
      <View style={styles.wrapper}>
        <Text  style={styles.title}>{cartItem.product.title}</Text>
        <Price
          price={cartItem.product.price}
          discount={cartItem.product.discount}
        />
        <AddToCartButton quantity={1} />
      </View>
    </Card>
  );
}

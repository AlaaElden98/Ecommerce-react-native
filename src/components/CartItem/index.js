import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Price} from '../Price';
import {AddToCartButton} from '../AddToCartButton';
import {Card} from '../Card';
import {PlatFormTouchable} from '../PlatFormTouchable';
import {useNavigation} from '@react-navigation/native';

export function CartItem(props) {
  const {cartItem} = props;
  const navigation = useNavigation();

  return (
    <Card style={styles.outerContainer}>
      <PlatFormTouchable
        style={styles.container}
        onPress={() => navigation.navigate('ProductScreen')}>
        <Image source={{uri: cartItem.product.imageUrl}} style={styles.image} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{cartItem.product.title}</Text>
          <Price
            price={cartItem.product.price}
            discount={cartItem.product.discount}
          />
          <AddToCartButton quantity={1} />
        </View>
      </PlatFormTouchable>
    </Card>
  );
}

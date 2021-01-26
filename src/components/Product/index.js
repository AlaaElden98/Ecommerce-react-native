import React from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PlatFormTouchable} from '../PlatFormTouchable';
import {Card} from '../Card';
import {Price} from '../Price';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions';
import styles from './styles';

export function Product(props) {
  const {product} = props;
  r.log(product);
  const navigation = useNavigation();
  return (
    <PlatFormTouchable
      style={styles.container}
      onPress={() => navigation.navigate('ProductScreen', {productId: 1})}>
      <Card>
        <Image
          source={{uri: IMAGES_URL + 'products/resized/' + product.images[0]}}
          style={styles.image}
        />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.title}>{cutLongName(product.title, 18)}</Text>
    </PlatFormTouchable>
  );
}

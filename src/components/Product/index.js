import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Card} from '../Card'
import {Price} from '../Price'
import {PlatFormTouchable} from '../PlatFormTouchable';
import {useNavigation} from '@react-navigation/native';

export function Product(props) {
  const {product} = props;
  const navigation = useNavigation()
  return (
    <PlatFormTouchable style={styles.container} onPress={()=>navigation.navigate('ProductScreen')}>
			<Card>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount}/>
			<Text style={styles.title}>{product.title}</Text>
    </PlatFormTouchable>
  );
}

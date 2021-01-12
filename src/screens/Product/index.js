import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {Price} from '../../components/Price';
import {dummyProduct1} from '../../utils/dummyData';
import {AddToCartButton} from '../../components/AddToCartButton';
import styles from './styles';
import {IonIcon} from '../../components/IonIcons';
function getProduct(productId) {
  return dummyProduct1;
}
export function ProductScreen(props) {
  const {productId} = props;
  const product = getProduct(productId);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.iconTitleWrapper}>
        <IonIcon name={'arrow-back'} style={styles.backIcon} />
        <View style={styles.titleWrapper}>
          <Text style={styles.productTitle}>{product.title}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Price price={product.price} discount={product.discount} />
        <Text style={styles.discriptionText}>Description</Text>
        <Text>blablabla</Text>
        <View style={styles.buttonWrapper}>
          <AddToCartButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

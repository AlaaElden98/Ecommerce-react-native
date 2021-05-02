/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {Price} from '../../components/Price';
import {AddToCartButton} from '../../components/AddToCartButton';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../../redux/actions';
import {IMAGES_URL} from '../../utils/constants';
import {getActualPrice} from '../../utils/helperFunctions';
import styles from './styles';

export function ProductScreen(props) {
  const {productId} = props.route.params;
  const [product, setProduct] = React.useState();
  const dispatch = useDispatch();
  const reduxProduct = useSelector((state) => state.home.product);
  React.useEffect(() => {
    if (reduxProduct && reduxProduct._id === productId) {
      setProduct(reduxProduct);
    }
  }, [reduxProduct]);

  React.useEffect(() => {
    dispatch(fetchProductById(productId));
  }, []);
  return product ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: IMAGES_URL + 'products/' + product.images[0]}}
          style={styles.image}
        />

        <View style={styles.wrapper}>
          <Price price={product.price} discount={product.discount} />
          <Text style={styles.discriptionText}>{product.details}</Text>
          <View style={styles.buttonWrapper}>
            <AddToCartButton
              productId={productId}
              cost={getActualPrice(product.price, product.discount)}
              count={product.increaseCount}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : null;
}

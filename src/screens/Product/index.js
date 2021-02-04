import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {Price} from '../../components/Price';
import {AddToCartButton} from '../../components/AddToCartButton';
import {IonIcon} from '../../components/IonIcons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../../redux/actions';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions';
import {getActualPrice} from '../../utils/helperFunctions';
import styles from './styles';

export function ProductScreen(props) {
  const {productId} = props.route.params;
  const {navigation} = props;
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
      <Image
        source={{uri: IMAGES_URL + 'products/' + product.images[0]}}
        style={styles.image}
      />
      <View style={styles.iconTitleWrapper}>
        <IonIcon
          name={'arrow-back'}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.productTitle}>
            {cutLongName(product.title, 28)}
          </Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Price price={product.price} discount={product.discount} />
        <Text style={styles.discriptionText}>Description</Text>
        <Text>{product.details}</Text>
        <View style={styles.buttonWrapper}>
          <AddToCartButton
            productId={productId}
            cost={getActualPrice(product.price, product.discount)}
            count={product.increaseCount}
          />
        </View>
      </View>
    </SafeAreaView>
  ) : null;
}

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input} from '../../components/Input';
import {IonIcon} from '../../components/IonIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {ProductsList} from '../../components/ProductsList';
import {searchForProduct} from '../../redux/actions/searchActionCreator';
import styles from './styles';

function renderSearchIcon() {
  return <IonIcon name="search" style={styles.searchIcon} />;
}

export function SearchScreen() {
  const [input, setInput] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const dispatch = useDispatch();
  const toBeAppendedProducts = useSelector((state) => state.search.products);

  useUpdateEffect(() => {
    setProducts(products.concat(toBeAppendedProducts));
  }, [toBeAppendedProducts]);

  const fetchProducts = () => {
    dispatch(searchForProduct(input, true));
  };

  const continueFetchProducts = () => {
    dispatch(searchForProduct(input));
  };

  useUpdateEffect(() => {
    setProducts([]);
    input && fetchProducts();
  }, [input]);

  return (
    <SafeAreaView style={styles.outer}>
      <Input
        placeholder="Type Here ..."
        bordered
        renderIconRight={renderSearchIcon}
        onChangeText={setInput}
        wrapperStyle={styles.input}
      />
      {input ? (
        <ProductsList
          data={products}
          onEndReachedThreshold={0.5}
          onEndReached={continueFetchProducts}
          isLoading={products.length === 0}
        />
      ) : null}
    </SafeAreaView>
  );
}

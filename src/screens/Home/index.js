/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, FlatList, ScrollView} from 'react-native';
import {Category} from '../../components/Category';
import {ProductsList} from '../../components/ProductsList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHomeData} from '../../redux/actions';
import styles from './styles';

function renderCategory({item}) {
  return <Category category={item} />;
}
function renderCategoriesList(categories) {
  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      horizontal={true}
      keyExtractor={keyExtractor}
    />
  );
}
const keyExtractor = (item) => item._id;

export function HomeScreen(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchHomeData());
  }, []);
  const categories = useSelector((state) => state.home.home.categories);
  const products = useSelector((state) => state.home.home.products);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      {renderCategoriesList(categories)}
      <Text style={styles.headerText}>Products</Text>
      <ProductsList data={products} />
    </ScrollView>
  );
}

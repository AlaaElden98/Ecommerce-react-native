import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Product} from '../../components/Product';
import {fetchChildrenCategroies} from '../../redux/actions';
import {useDispatch} from 'react-redux';

import styles from './styles';

export function CategoryScreen(props) {
  const {categoryId} = props.route.params;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchChildrenCategroies(categoryId));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
    </SafeAreaView>
  );
}

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Product} from '../../components/Product';
import {dummyProduct1} from '../../utils/dummyData';
import styles from './styles';

export function CategoryScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Product product={dummyProduct1} />
    </SafeAreaView>
  );
}

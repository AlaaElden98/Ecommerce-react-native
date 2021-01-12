import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Card} from '../Card';
import {PlatFormTouchable} from '../PlatFormTouchable';
import {useNavigation} from '@react-navigation/native';
export function Category(props) {
  const {category} = props;
  const navigation = useNavigation();
  return (
    <PlatFormTouchable
      style={styles.container}
      onPress={() => navigation.navigate('CategoryScreen')}>
      <Card>
        <Image source={{uri: category.imageUrl}} style={styles.image} />
      </Card>
      <Text style={styles.title}>{category.title}</Text>
    </PlatFormTouchable>
  );
}

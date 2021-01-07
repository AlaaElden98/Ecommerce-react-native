import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Card} from '../Card'
export function Category(props) {
  const {category} = props;

  return (
    <View style={styles.container}>
			<Card>
      <Image source={{uri: category.imageUrl}} style={styles.image} />
      </Card>
			<Text style={styles.title}>{category.title}</Text>
    </View>
  );
}

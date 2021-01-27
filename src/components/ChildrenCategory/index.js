import React from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions';
import {PlatFormTouchable} from '../../components/PlatFormTouchable';

import styles from './styles';

export function ChildrenCategory(props) {
  const {category, selectedCategory, setSelectedCategory} = props;

  return (
    <PlatFormTouchable
      style={styles.wrappper}
      onPress={() => setSelectedCategory(category)}>
      <Image
        style={styles.image}
        source={{uri: IMAGES_URL + 'cat-thumbs/resized/' + category.image}}
      />
      <View style={styles.titleWrapper}>
        <Text
          style={[
            styles.title,
            category._id === selectedCategory._id
              ? styles.selctedTitle
              : styles.unSelctedTitle,
          ]}>
          {category.parentId ? cutLongName(category.name) : 'All'}
        </Text>
      </View>
    </PlatFormTouchable>
  );
}

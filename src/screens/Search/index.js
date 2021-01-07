import React from 'react';
import {View} from 'react-native';
import {Input} from '../../components/Input';
import {IonIcon} from '../../components/IonIcons';
import styles from './styles';

function renderSearchIcon() {
  return <IonIcon name="search" style={styles.searchIcon} />;
}

export function SearchScreen() {
  return (
    <View style={styles.container}>
      <Input
        border
        placeholder="Type here"
        renderIconRight={renderSearchIcon}
      />
    </View>
  );
}

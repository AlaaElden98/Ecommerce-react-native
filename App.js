import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddToCartButton} from './src/components/AddToCartButton'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="accessibility" style={{fontSize:50}}/> 
      <Text>asdad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  }, 
});

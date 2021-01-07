import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {AppButton} from '../AppButton';
import styles from './styles';

export function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(props? 1 : 0);


  const increamentQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const decreamentQuantityHandler = () => {
    setQuantity(quantity - 1);
  };

  const renderInitialButton = () => {
    return (
      <AppButton
        onPress={increamentQuantityHandler}
        title="ADD TO CART"
        wrapperStyle={styles.wrapper}
      />
    );
  };

  const renderIncreamentDecreamentButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plusMinus} onPress={decreamentQuantityHandler}>
          -
        </Text>
        <Text>{quantity}</Text>
        <Text style={styles.plusMinus} onPress={increamentQuantityHandler}>
          +
        </Text>
      </View>
    );
  };
  
  return quantity === 0
    ? renderInitialButton()
    : renderIncreamentDecreamentButton();
}

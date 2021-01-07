import React from "react";
import { Text } from "react-native";
import { PlatFormTouchable } from "../PlatFormTouchable";

import styles from "./styles";

export class AppButton extends React.Component {
  render() {
    const { title, ...rest } = this.props;

    return (
      <PlatFormTouchable {...rest} style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </PlatFormTouchable>
    );
  }
}

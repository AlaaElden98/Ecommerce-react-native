import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export const Input = (props) => {
  const {
    underlined,
    border,
    underlinedHeight,
    underlinedColor,
    borderColor,
    borderWidth,
    borderRadius,
    placeholderPosition,
    renderIconLeft,
    renderIconRight,
    stacked,
    placeholder,
    style,
    wrapperStyle,
    iconWrapper,
    ...rest
  } = props;
  return (
    <View
      style={[
        border && {
          borderColor: borderColor || "#bbb",
          borderRadius: borderRadius || 5,
          borderWidth: borderWidth || 1,
        },
        wrapperStyle,
      ]}
    >
      {stacked && <Text>{placeholder}</Text>}
      <View style={{ flexDirection: "row" }}>
        {renderIconLeft && (
          <View style={[styles.iconWrapper, iconWrapper]}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          {...rest}
          placeholder={stacked ? "" : placeholder}
          style={
            ([{ padding: 0, textAlign: placeholderPosition || "left" }], style)
          }
        />
        {renderIconRight && (
          <View style={[styles.iconWrapper, iconWrapper]}>
            {renderIconRight()}
          </View>
        )}
      </View>
      {(underlined || stacked) && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColor || "#bbb",
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

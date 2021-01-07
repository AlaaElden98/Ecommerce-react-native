import { StyleSheet } from "react-native";

const incDecBtnColor = "#bbb";

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 0,
    minHeight: 0,
  },
  increaseDecreaseContainer: {
    flexDirection: "row",
    backgroundColor: incDecBtnColor,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: incDecBtnColor,
  },
  text: { fontSize: 24 },
  plusMinus: {
    padding: 10,
  },
});

export default styles;

import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: "Courier", //this is IOS only
    // fontSize: 10,
    // fontStyle: "italic",
    // fontWeight: "600",
    // color: colors.black,
    // textTransform: "uppercase",
    // textDecorationLine: "line-through",
    // textAlign: "justify",
    // lineHeight: 30,
  },
});

export default AppText;

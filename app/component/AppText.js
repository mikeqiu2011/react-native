import React from "react";
import { Text, StyleSheet } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Courier", //this is IOS only
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    color: "tomato",
    textTransform: "uppercase",
    textDecorationLine: "line-through",
    textAlign: "justify",
    lineHeight: 30,
  },
});

export default AppText;

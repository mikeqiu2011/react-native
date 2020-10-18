import React from "react";
import { Text, StyleSheet } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Courier", //this is IOS only
    fontSize: 30,
    color: "tomato",
  },
});

export default AppText;

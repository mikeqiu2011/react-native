import React from "react";
import { Text, StyleSheet } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto", //this is Android only
    fontSize: 25,
    color: "tomato",
  },
});

export default AppText;

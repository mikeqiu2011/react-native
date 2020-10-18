import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

const buttonStyle = { backgroundColore: "orange" };

export default function App() {
  console.log(useDimensions());
  console.log(Dimensions.get("window"));
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <SafeAreaView style={buttonStyle}>
      <View style={{ backgroundColor: "orange", width: "50%", height: 70 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

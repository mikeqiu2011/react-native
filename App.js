import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => console.log("pressed ")}>hello world</Text>
      <StatusBar style="auto" />

      <TouchableNativeFeedback onPress={handlePress}>
        <Image
          blurRadius={10}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200",
          }}
        ></Image>
      </TouchableNativeFeedback>
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

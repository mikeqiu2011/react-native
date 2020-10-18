import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "gold",
          flex: 8,
        }}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            source={require("../assets/logo-red.png")}
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Image>
        </ImageBackground>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default WelcomeScreen;

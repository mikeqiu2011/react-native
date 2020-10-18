import React from "react";
import { StyleSheet, View, Image, ImageBackground, Button } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      ></Image>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "yellow",
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
  },
  registerButton: {
    backgroundColor: "orange",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;

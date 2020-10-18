import React from "react";
import { StyleSheet, View, Image, ImageBackground, Button } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      {/* <Image
        source={require("../assets/logo-red.png")}
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Image> */}
      <View style={styles.loginButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: "yellow",
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;

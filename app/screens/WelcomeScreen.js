import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Button,
  Text,
} from "react-native";
import AppButton from "../component/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text>Sell things you don't need</Text>
      </View>

      <AppButton title="login" />
      <AppButton title="register" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});

export default WelcomeScreen;

import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Courier", //this is IOS only
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "uppercase",
          textDecorationLine: "line-through",
          textAlign: "justify",
          lineHeight: 30,
        }}
      >
        I love React Native, this is my best course, very hands on, very
        interesting, bite sized, very easy to master
      </Text>
    </View>
  );
}

//rnss - react native style sheet
//rsf - react static function

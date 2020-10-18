import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5, // 0 is no shadow, 1 is full shadow
          shadowRadius: 10,
        }}
      ></View>
    </View>
  );
}

//rnss - react native style sheet
//rsf - react static function

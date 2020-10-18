import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { Text, View } from "react-native";
import AppText from "./app/component/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="email" size={200} color="tomato" />
    </View>
  );
}

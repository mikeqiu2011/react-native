import React from "react";

import { View } from "react-native";
import AppButton from "./app/component/AppButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton
        title="login"
        onPress={() => console.log("pressed")}
      ></AppButton>
    </View>
  );
}

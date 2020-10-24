import React from "react";

import { View } from "react-native";
import AppButton from "./app/component/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/component/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/chair.jpg")}
      />
    </View>
  );
}

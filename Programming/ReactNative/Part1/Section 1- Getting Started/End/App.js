import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

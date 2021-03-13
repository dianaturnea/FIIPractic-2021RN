import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Example1() {
  return (
    <View style={style.container}>
      <Text>Example1</Text>
      <Tex></Tex>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
  },
});

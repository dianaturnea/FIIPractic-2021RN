import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const main = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

export default main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9b59b6",
    flex: 6,
    flexDirection: "row",
    justifyContent: "center",
    width, // <=> width: width
    // height: height / 2,
  },
});

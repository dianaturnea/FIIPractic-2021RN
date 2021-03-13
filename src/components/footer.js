import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const footer = () => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
};

export default footer;
//8e44ad
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#e74c3c",
    flex: 0.5,
    width,
  },
});

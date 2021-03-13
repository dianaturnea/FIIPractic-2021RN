import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
const header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16a085",
    flex: 2,
    width,
  },
});

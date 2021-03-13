import React from "react";
import { StyleSheet, View } from "react-native";
// import { CSSExample2 } from "./src/screens";
import { Header, Footer, MainContainer } from "./src/components";
// import { MainContainer } from "./src/components/main";

export default function App() {
  // return <CSSExample2 />;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.h1}>Titlu</Text> */}
      {/* <View style={[styles.circle, { backgroundColor: "red" }]}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <Pressable onPress={() => alert("Hello")}>
        <View style={styles.triangle}></View>
      </Pressable>
      <View style={{ backgroundColor: "pink" }}>
        <View style={styles.triangle}></View>
      </View>
      <View style={{ backgroundColor: "yellow" }}>
        <View style={styles.triangle}></View>
      </View>
      <View style={styles.triangle}></View>
      <View style={styles.triangle}></View>
      <View style={styles.triangle}></View>
      <View style={styles.triangle}></View> */}
      <Header style={{ flex: 1 }} />
      <MainContainer />
      <Footer style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#9b59b6",
    alignItems: "center",
    alignContent: "stretch",
    justifyContent: "space-between",
    padding: 15,
    // flexDirection: "",
    // flexWrap: "wrap",
  },
  textColor: {
    color: "#34495e",
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: "bold",
  },
  textCenter: {
    alignSelf: "center",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  oval: {
    width: 100,
    height: 50,
    backgroundColor: "#e67e22",
    borderRadius: 50,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#e67e22",
    borderRadius: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTopWidth: 25,
    borderTopColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "#d35400",
    borderBottomWidth: 25,
    borderColor: "transparent",
  },
  backgroundColorChange: {
    backgroundColor: "red",
  },
});

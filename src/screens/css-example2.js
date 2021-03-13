import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Oval = styled.View`
   {
    height: 50px;
    width: 100px;
    background-color: #555;
    border-radius: 50%;
  }
`;

const Title = styled.Text`
  color: #232;
  text-align: center;
  font-size: 16px;
`;

export default function Example2() {
  return (
    <View style={style.container}>
      <View style={style.cerc}></View>
      <View style={style.triunghi}></View>
      <View style={style.trapez}></View>
      <Oval />
      <Title>Hello</Title>
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
  cerc: {
    height: 50,
    width: 50,
    backgroundColor: "#2ecc71",
    borderRadius: 50,
  },
  triunghi: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderTopWidth: 50,
    borderColor: "#8e44ad",
  },
  trapez: {
    borderStyle: "solid",
    borderBottomWidth: 50,
    borderBottomColor: "#8e44ad",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    height: 0,
    width: 125,
  },
});

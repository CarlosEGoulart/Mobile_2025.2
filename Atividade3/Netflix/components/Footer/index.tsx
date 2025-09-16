import { View, StyleSheet } from "react-native";
import React from "react";
import IconButton from "./IconButton";

export default function Footer() {
  return (
    <View style={styles.container}>
      <IconButton text="Início" icon="home" />
      <IconButton text="Jogos" icon="game-controller-outline" />
      <IconButton text="Em breve" icon="play-circle-outline" />
      <IconButton text="Minha Netflix" icon="person-outline" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});
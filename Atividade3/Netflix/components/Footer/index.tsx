import { View, StyleSheet } from "react-native";
import React from "react";
import theme from "@/constants/theme";
import IconButton from "./IconButton";

export default function Footer() {
  return (
    <View style={styles.container}>
      <IconButton icon="home" text="Início" active />
      <IconButton icon="download" text="Downloads" />
      <IconButton icon="playcircleo" text="Novidades" />
      <IconButton icon="user" text="Minha Netflix" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-around",
    paddingHorizontal: theme.dimension.xs,
  },
});
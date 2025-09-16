import {
    View,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import { MaterialIcons } from "@expo/vector-icons";
  import theme from "@/constants/theme";
  
  export default function Actions() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <MaterialIcons name="cast" size={24} color="white" />
        </TouchableOpacity>
  
        <TouchableOpacity>
          <AntDesign name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.dimension.sm,
    },
  });
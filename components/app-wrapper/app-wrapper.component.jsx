import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function AppWrapper({ children }) {
  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <View style={styles.container}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems:'center'
  }
});

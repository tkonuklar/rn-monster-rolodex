import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Headline({ children }) {
  return (
    <View>
      <Text h1 style={styles.header}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    margin:50,
    color: '#0ccac4'
  }
});

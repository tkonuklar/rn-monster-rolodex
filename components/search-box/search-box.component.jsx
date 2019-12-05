import React from "react";
import { TextInput, StyleSheet } from "react-native";

export function SearchBox({ placeholder, handleChanges }) {
  return (
    <TextInput
      style={styles.searchBox}
      placeholder={placeholder}
      onChangeText={handleChanges}
    />
  );
}

const styles = StyleSheet.create({
  searchBox: {  
    padding: 10,
    width: 300,
    backgroundColor: 'white'
  }
});


import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card } from "../card/card.component";

export function CardList({ monsters }) {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        keyExtractor={(item, index) => item.id.toString()}
        data={monsters}
        renderItem={itemData => <Card monster={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20
  },
  flatList: {
    flex: 1
  }
});

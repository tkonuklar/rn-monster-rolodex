import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Card({monster}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.touchable}>
      <View style={styles.cardContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://robohash.org/${monster.id}?set=set2&size=180x180`
          }}
          style={styles.image}
        />
        <Text h2>{monster.name}</Text>
        <Text>{monster.email}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 20
  },
  cardContainer: {
    backgroundColor: "#95dada",
    borderBottomColor: "black",
    borderRadius: 5,
    padding: 25,
    backfaceVisibility: "hidden",
    alignItems: 'center'
  },
  touchable: {
    justifyContent:'space-around',
    alignItems: 'center',
    width: 300,
    height: 300
  },
});

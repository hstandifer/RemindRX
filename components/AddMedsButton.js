import React from "react";
import { StyleSheet, Text, Pressable, View, useState } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function AddMedsButton({ handleToggleAdd }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={handleToggleAdd}
      >
        <View style={styles.item}>
          <FontAwesome5 name={"plus-circle"} size={25} color={"white"} />
          <Text style={styles.medText}>Add Med</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    margin: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: "purple",
  },
  medText: {
    color: "white",
    paddingTop: 5,
  },
});

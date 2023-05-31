import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
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
    width: "94%",
  },
  item: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: "skyblue",
    marginBottom: 10,
  },
  medText: {
    color: "white",
    paddingTop: 5,
  },
});

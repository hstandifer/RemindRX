import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ManageScreen() {
  return (
    <View style={styles.container}>
      <Text>ManageScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

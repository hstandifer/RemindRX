import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MedList from "../components/MedList";
export default function ManageScreen() {
  return (
    <View style={styles.container}>
      <Text>ManageScreen</Text>
      <MedList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

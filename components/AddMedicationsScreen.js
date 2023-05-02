import React from "react";
import { useState, View, Text, StyleSheet, Modal, Button } from "react-native";

export default function AddMedications({ onCancel }) {
  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <Text>Add Medications Screen</Text>

        <View style={styles.buttonContainer}>
          <Button title="cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    padding: 5,
    flexDirection: "row",
    marginBottom: 35,
  },
});

import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function MedInput({ placeholder, handleChange, id, state }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={state}
        onChangeText={handleChange.bind(this, id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
});

import React from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

export default function Login() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="username" />
      <TextInput style={styles.input} />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 2,
    backgroundColor: "red",
    borderColor: "black",
    color: "black",
    borderWidth: 2,
  },
});

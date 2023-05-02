import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AccountScreeen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <Text>Account Screen</Text>
      <Button
        title="Login"
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'pink',
    paddingTop: 100,
    justifyContent: "flex-start",
  },
  loginButton: {},
});

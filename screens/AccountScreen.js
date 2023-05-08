import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AccountScreeen({ navigation }) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Username").then((value) => {
        if (value != null) {
          setUsername(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <Text>Account Screen</Text>
      <Text>Hello: {username}</Text>
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

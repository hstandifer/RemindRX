import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");

  const setData = async () => {
    if (username.length == 0) {
      Alert.alert("warning!", "please enter a value");
    } else {
      try {
        await AsyncStorage.setItem("Username", username);
        navigation.navigate("AccountScreen");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={(value) => setUsername(value)}
      />
      <Button title="Login" onPress={setData} />
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
    paddingLeft: 10,
  },
});

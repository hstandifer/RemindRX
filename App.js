import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import MedInput from "./components/MedInput";

export default function App() {
  const [medicationsArray, setMedicationsArray] = useState([]);
  const [medName, setMedName] = useState("");
  const [medFrequency, setMedFrequency] = useState("");
  const [medDose, setMedDose] = useState("");
  const [medTime, setMedTime] = useState("");

  function addMedsHandler() {
    setMedicationsArray((currentMedicationsArray) => [
      {
        name: medName,
        id: Math.random().toString(),
        frequency: medFrequency,
        dosage: medDose,
        time: medTime,
      },
      ...currentMedicationsArray,
    ]);
  }

  function handleStateChange(id, text) {
    if (id === "1") {
      setMedName(text);
    } else if (id === "2") {
      setMedFrequency(text);
    } else if (id === "3") {
      setMedDose(text);
    } else {
      setMedTime(text);
    }
  }

  console.log(medName, medFrequency, medDose, medTime);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <MedInput
          placeholder={"Medicine Name"}
          handleChange={handleStateChange}
          id={"1"}
          state={medName}
        />
        <MedInput
          placeholder={"Medicine Frequency"}
          handleChange={handleStateChange}
          id={"2"}
          state={medFrequency}
        />
        <MedInput
          placeholder={"Medicine Dose"}
          handleChange={handleStateChange}
          id={"3"}
          state={medDose}
        />
        <MedInput
          placeholder={"Medicine Time"}
          handleChange={handleStateChange}
          id={"4"}
          state={medTime}
        />
      </View>

      <Button title="Add Med" onPress={addMedsHandler} />
      <View style={styles.medContainer}>
        <FlatList
          data={medicationsArray}
          renderItem={({ item }) => (
            <Text>
              {item.name},{item.id},{item.dosage},{item.time}
            </Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: "red",
  },
  medContainer: {
    backgroundColor: "yellow",
    color: "white",
  },
});

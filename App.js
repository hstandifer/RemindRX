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
// import MedInput from "./components/MedInput";

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
        <TextInput
          placeholder={"Medication Name"}
          value={medName}
          onChangeText={handleStateChange.bind(this, "1")}
        />
        <TextInput
          placeholder={"Medication Frequency"}
          value={medFrequency}
          onChangeText={handleStateChange.bind(this, "2")}
        />
        <TextInput
          placeholder={"Medication Dose"}
          value={medDose}
          onChangeText={handleStateChange.bind(this, "3")}
        />
        <TextInput
          placeholder={"Medication Time"}
          value={medTime}
          onChangeText={handleStateChange.bind(this, "4")}
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

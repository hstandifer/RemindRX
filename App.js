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
import Medication from "./components/Medication";
import EditMedication from "./components/EditMedication";

export default function App() {
  const [medicationsArray, setMedicationsArray] = useState([]);
  const [medName, setMedName] = useState("");
  const [medFrequency, setMedFrequency] = useState("");
  const [medDose, setMedDose] = useState("");
  const [medTime, setMedTime] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
  const [chosenMed, setChosenMed] = useState({});
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
    //need to reset the input field.
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

  function deleteMedItem(id) {
    setMedicationsArray((currentMedsArray) => {
      return currentMedsArray.filter((med) => med.id !== id);
    });
  }

  function updateMedication(id) {
    //const medication = deleteMedItem(id);
    //setMedicationsArray(...)

    setMedicationsArray((currentMedsArray) => {
      let arr = currentMedsArray.map((med) => med.id !== id);

      arr.push({
        name: "",
        id: "",
        frequency: "",
        dosage: "",
        time: "",
      });
      return arr;
    });
  }

  function toggleModal(id) {
    setIsModalActive((prevState) => !prevState);
    setChosenMed(medicationsArray.find((med) => med.id === id));
    console.log("The value of chosenMed: " + chosenMed.name);
  }
  let modal;

  if (isModalActive) {
    modal = (
      <EditMedication
        onCancel={toggleModal}
        medInfo={chosenMed}
        updateStateChange={handleStateChange}
      />
    );
  }

  console.log(isModalActive);
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
            <Medication
              medInfo={item}
              handleDelete={deleteMedItem}
              handleToggle={toggleModal}
            />
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

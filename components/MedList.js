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
import MedInput from "./MedInput";
import Medication from "./Medication";
import EditMedication from "./EditMedication";
import AddMedsButton from "./AddMedsButton";
import AddMedications from "./AddMedicationsScreen";

export default function MedList() {
  const [medicationsArray, setMedicationsArray] = useState([]);
  const [medName, setMedName] = useState("");
  const [medFrequency, setMedFrequency] = useState("");
  const [medDose, setMedDose] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [chosenMed, setChosenMed] = useState({});
  function addMedsHandler() {
    setMedicationsArray((currentMedicationsArray) => [
      {
        name: medName,
        id: Math.random().toString(),
        frequency: medFrequency,
        dosage: medDose,
      },
      ...currentMedicationsArray,
    ]);
    setMedName("");
    setMedFrequency("");
    setMedDose("");
  }

  function handleStateChange(id, text) {
    if (id === "1") {
      setMedName(text);
    } else if (id === "2") {
      setMedFrequency(text);
    } else if (id === "3") {
      setMedDose(text);
    }
  }

  // function handleTimeChange(time) {
  //   setMedTime(time);
  // }

  function deleteMedItem(id) {
    setMedicationsArray((currentMedsArray) => {
      return currentMedsArray.filter((med) => med.id !== id);
    });
  }

  function updateMedication(id, name, freq, dose) {
    deleteMedItem(id);

    setMedicationsArray((currentMedicationsArray) => [
      {
        name: name,
        id: id,
        frequency: freq,
        dosage: dose,
      },
      ...currentMedicationsArray,
    ]);
    setIsModalActive((prevState) => !prevState);
  }

  function toggleModal(id) {
    setIsModalActive((prevState) => !prevState);
    setChosenMed(medicationsArray.find((med) => med.id === id));
  }

  function toggleAddModal() {
    setIsAddModalActive(!isAddModalActive);
  }

  //console.log(isModalActive);
  console.log(isAddModalActive);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {isModalActive && (
        <EditMedication
          onCancel={toggleModal}
          medInfo={chosenMed}
          onSave={updateMedication}
        />
      )}
      {isAddModalActive && <AddMedications onCancel={toggleAddModal} />}
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
      </View>
      {/* <Test timeStateValue={medTime}updateTimeChange={handleTimeChange}/> */}
      <Button title="Add Med" onPress={addMedsHandler} />
      <View style={styles.medContainer}>
        <AddMedsButton handleToggleAdd={toggleAddModal} />
        <FlatList
          data={medicationsArray}
          renderItem={({ item }) => (
            <>
              <Medication
                medInfo={item}
                handleDelete={deleteMedItem}
                handleToggle={toggleModal}
              />
            </>
          )}
          numColumns={2}
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
    marginTop: 50,
  },
  inputContainer: {
    backgroundColor: "red",
  },
  medContainer: {
    backgroundColor: "yellow",
    color: "white",
  },
});

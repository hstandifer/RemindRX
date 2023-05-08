import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import MedInput from "./MedInput";

export default function AddMedications({ onCancel }) {
  const [medicationsArray, setMedicationsArray] = useState([]);
  const [medName, setMedName] = useState("");
  const [medFrequency, setMedFrequency] = useState("");
  const [medDose, setMedDose] = useState("");

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

    // clear the input fields when a medication is added
    setMedName("");
    setMedFrequency("");
    setMedDose("");
    onCancel();
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

  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <Text>Add Medications Screen</Text>

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

        <View style={styles.buttonContainer}>
          <Button title="cancel" onPress={onCancel} />
          <Button title="Add Med" onPress={addMedsHandler} />
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
  inputContainer: {
    backgroundColor: "red",
  },
});

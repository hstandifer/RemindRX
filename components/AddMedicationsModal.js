import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import MedInput from "./MedInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function AddMedicationsModal({ onClose, onAddMedication }) {
  const [newMedication, setNewMedication] = useState("");
  const [newDose, setNewDose] = useState("");
  const [newFrequency, setNewFrequency] = useState("");
  const [newTime, setNewTime] = useState(new Date(1598051730000));

  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setNewTime(currentDate);
    setIsTimePickerVisible(false);
  };

  const handleAddMedication = () => {
    if (
      newMedication.trim() !== "" &&
      newDose.trim() !== "" &&
      newFrequency.trim() !== "" &&
      newTime !== null
    ) {
      const newMedicationObject = {
        id: Math.random().toString(),
        name: newMedication,
        dose: newDose,
        frequency: newFrequency,
        time: newTime,
      };

      onAddMedication(newMedicationObject);

      // reset fields
      setNewMedication("");
      setNewDose("");
      setNewFrequency("");

      // close modal
      onClose();
    }
  };

  function handleStateChange(id, text) {
    if (id === "1") {
      setNewMedication(text);
    } else if (id === "2") {
      setNewFrequency(text);
    } else if (id === "3") {
      setNewDose(text);
    }
  }

  const showTimepicker = () => {
    setIsTimePickerVisible(!isTimePickerVisible);
  };

  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <Text>Add Medications Screen</Text>

        <View style={styles.inputContainer}>
          <MedInput
            placeholder={"Medicine Name"}
            handleChange={handleStateChange}
            id={"1"}
            state={newMedication}
          />
          <MedInput
            placeholder={"Medicine Frequency"}
            handleChange={handleStateChange}
            id={"2"}
            state={newFrequency}
          />
          <MedInput
            placeholder={"Medicine Dose"}
            handleChange={handleStateChange}
            id={"3"}
            state={newDose}
          />
          <Text>Time: {newTime.toLocaleString()}</Text>

          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>

        {isTimePickerVisible ? (
          <RNDateTimePicker
            testID="dateTimePicker"
            display="clock"
            value={newTime}
            mode="time"
            //is24Hour={true}
            onChange={onChange}
            //onCancel={setIsTimePickerVisible(!isTimePickerVisible)}
          />
        ) : null}

        <View style={styles.buttonContainer}>
          <Button title="cancel" onPress={onClose} />
          <Button title="Add Med" onPress={handleAddMedication} />
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

import { StyleSheet, View, TextInput, Button, Modal, Text } from "react-native";
import { useState } from "react";

export default function EditMedication({ onCancel, medInfo, onSave }) {
  const [medName, setMedName] = useState(medInfo.name);
  const [medFrequency, setMedFrequency] = useState(medInfo.frequency);
  const [medDose, setMedDose] = useState(medInfo.dosage);
  const [medId, setMedId] = useState(medInfo.id);

  function handleMedNameStateChange(text) {
    setMedName(text);
  }
  function handleMedFrequencyStateChange(text) {
    setMedFrequency(text);
  }
  function handleMedDoseStateChange(text) {
    setMedDose(text);
  }

  function update() {
    onSave(medId, medName, medFrequency, medDose);
  }

  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <Text style={styles.text}>The modal is activated</Text>
        <View style={styles.container}>
          <TextInput
            placeholder={"med name"}
            defaultValue={medInfo.name}
            onChangeText={handleMedNameStateChange}
          />
          <TextInput
            placeholder={"med frequency"}
            defaultValue={medInfo.frequency}
            onChangeText={handleMedFrequencyStateChange}
          />
          <TextInput
            placeholder={"med dose"}
            defaultValue={medInfo.dosage}
            onChangeText={handleMedDoseStateChange}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="cancel" onPress={onCancel} />
          <Button title="save" onPress={update} />
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
  text: {
    color: "green",
  },
  buttonContainer: {
    padding: 5,
    flexDirection: "row",
    marginBottom: 35,
  },
});

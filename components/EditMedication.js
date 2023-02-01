import { StyleSheet, View, TextInput, Button, Modal, Text } from "react-native";
import MedInput from "./MedInput";

export default function EditMedication({
  onCancel,
  medInfo,
  handleStateChange,
}) {
  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <Text style={styles.text}>The modal is activated</Text>
        {/* <Text style={styles.text}>{medInfo}</Text> */}
        <MedInput
          placeholder={"Medicine Name"}
          handleChange={handleStateChange}
          id={"1"}
          state={medInfo.name}
        />
        <MedInput
          placeholder={"Medicine Frequency"}
          handleChange={handleStateChange}
          id={"2"}
          state={medInfo.frequency}
        />
        <MedInput
          placeholder={"Medicine Dose"}
          handleChange={handleStateChange}
          id={"3"}
          state={medInfo.dosage}
        />
        <MedInput
          placeholder={"Medicine Time"}
          handleChange={handleStateChange}
          id={"4"}
          state={medInfo.time}
        />
        <View style={styles.buttonContainer}>
          <Button title="cancel" onPress={onCancel} />
          <Button title="save" />
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
  },
});

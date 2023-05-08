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
import Medication from "./Medication";
import AddMedsButton from "./AddMedsButton";
import AddMedications from "./AddMedicationsModal";
import EditMedication from "./EditMedication";

export default function MedList({ medicationsArray }) {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isAddModalActive, setIsAddModalActive] = useState(false);

  function toggleModal(id) {
    setIsModalActive((prevState) => !prevState);
    setChosenMed(medicationsArray.find((med) => med.id === id));
  }

  function toggleAddModal() {
    setIsAddModalActive(!isAddModalActive);
  }

  return (
    <View style={styles.medContainer}>
      <AddMedsButton handleToggleAdd={toggleAddModal} />
      {isModalActive && (
        <EditMedication
          onCancel={toggleModal}
          medInfo={chosenMed}
          onSave={updateMedication}
        />
      )}
      {isAddModalActive && <AddMedications onCancel={toggleAddModal} />}
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

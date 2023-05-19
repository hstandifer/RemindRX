import React, { useEffect, useState } from "react";
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
import EditMedication from "./EditMedication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddMedicationsModal from "./AddMedicationsModal";

export default function MedList() {
  const [medications, setMedications] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  useEffect(() => {
    loadMedications();
  }, []);

  // load medications from localStorage
  const loadMedications = async () => {
    try {
      const storedMedications = await AsyncStorage.getItem("medications");
      if (storedMedications !== null) {
        setMedications(JSON.parse(storedMedications));
      }
    } catch (error) {
      console.log("Error loading medications:", error);
    }
  };

  function toggleAddModal() {
    setIsAddModalVisible((prevState) => !prevState);
  }
  // function toggleModal(id) {
  //   setIsModalActive((prevState) => !prevState);
  //   setChosenMed(medicationsArray.find((med) => med.id === id));
  // }

  // adds medications to AsyncStorage and state
  const handleAddMedication = async (newMedication) => {
    const updatedMedications = [...medications, newMedication];
    setMedications(updatedMedications);

    try {
      await AsyncStorage.setItem(
        "medications",
        JSON.stringify(updatedMedications)
      );
    } catch (error) {
      console.log("Error saving medications:", error);
    }
  };

  // temp delete localStorage
  function clearStorage() {
    AsyncStorage.clear();
    setMedications([]);
  }

  return (
    <View style={styles.medContainer}>
      <AddMedsButton handleToggleAdd={toggleAddModal} />

      {/* to be refactored */}
      {/* {isModalActive && (
        <EditMedication
          onCancel={toggleModal}
          medInfo={chosenMed}
          onSave={updateMedication}
        />
      )} */}
      {isAddModalVisible && (
        <AddMedicationsModal
          onClose={toggleAddModal}
          onAddMedication={handleAddMedication}
        />
      )}

      <FlatList
        data={medications}
        renderItem={({ item }) => (
          <>
            <Medication
              medInfo={item}
              // handleDelete={deleteMedItem}
              // handleToggle={toggleModal}
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

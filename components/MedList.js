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
import AddMedications from "./AddMedicationsModal";
import EditMedication from "./EditMedication";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MedList() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [medicationsArray, setMedicationsArray] = useState([]);

  useEffect(() => {
    getMedList();
  }, [getMedList]);
  function toggleModal(id) {
    setIsModalActive((prevState) => !prevState);
    setChosenMed(medicationsArray.find((med) => med.id === id));
  }

  function toggleAddModal() {
    setIsAddModalActive(!isAddModalActive);
  }

  const getMedList = () => {
    try {
      AsyncStorage.getItem("medications").then((value) => {
        if (value != null) {
          console.log("Valueuiuio: " + JSON.parse(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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

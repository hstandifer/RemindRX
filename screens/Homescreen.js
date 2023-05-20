import React from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import AddMedsButton from "../components/AddMedsButton";
import MedList from "../components/MedList";

export default function Homepage({ medicationsArray }) {
  return (
    <View style={styles.HomepageContainer}>
      <Text style={styles.title}>Medications</Text>
      

      <ScrollView style={styles.listContainer}>
          <MedList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HomepageContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'pink',
    margin: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 50,
  },
  listContainer: {
    // backgroundColor: 'limegreen',
    width: "100%",
    marginTop: 5,
  },
  medItem: {
    color: "white",
    padding: 5,
  },
  medContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

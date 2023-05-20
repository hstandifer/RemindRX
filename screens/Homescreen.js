import React from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import AddMedsButton from "../components/AddMedsButton";
import MedList from "../components/MedList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage({ medicationsArray }) {
  return (
    <SafeAreaView style={{height: "100%"}}>
      <View style={styles.HomepageContainer}>
        <Text style={styles.title}>RemindRX</Text>
        

        {/* <ScrollView style={styles.listContainer}> */}
            <MedList />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
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
    marginBottom: 15,
    fontSize: 35,
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

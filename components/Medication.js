import { Pressable, View, Text, StyleSheet, Button } from "react-native";

export default function Medication({ medInfo }) {
  return (
    <View style={styles.medContainer}>
      <Pressable>
        <View style={styles.itemContainer}>
          <Text style={styles.medItem}>
            {medInfo.name},{medInfo.dosage},{medInfo.frequency},
            {medInfo.newTime}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    borderRadius: 8,
    height: 150,
    width: 150,
    backgroundColor: "purple",
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

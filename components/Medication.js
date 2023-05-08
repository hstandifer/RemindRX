import { Pressable, View, Text, StyleSheet, Button } from "react-native";

export default function Medication({ handleDelete, handleToggle, medInfo }) {
  return (
    <View style={styles.medContainer}>
      <Pressable onPress={handleDelete.bind(this, medInfo.id)}>
        <View style={styles.itemContainer}>
          <Text style={styles.medItem}>
            {medInfo.name},{medInfo.dosage},{medInfo.frequency},
          </Text>
        </View>
        <Button
          title="Edit Med"
          onPress={handleToggle.bind(this, medInfo.id)}
        />
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

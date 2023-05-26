import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Medication({ medInfo, takeMedication }) {
  const handlePress = () => {
    if (!medInfo.taken) {
      Alert.alert(
        "Medication",
        "\nDid you take your medication?\n",
        [
          {
            text: "No",
            style: 'cancel',
          },
          {
            text: "Yes",
            onPress: () => takeMedication(medInfo.id),
            style: "default"
          }
        ],
        "default"
      );
    }
  };

  return (
    <View style={styles.medContainer}>
      <Pressable onPress={handlePress}>
        <View style={[styles.itemContainer, medInfo.taken && styles.itemTaken]}>
          <Text style={[styles.medItem, styles.title]}>{medInfo.name}</Text>
          <View style={styles.timeContainer}>
            <FontAwesome5 name={"clock"} solid size={15} color={"black"} />
            <Text style={styles.medItem}>{medInfo.time}</Text>
          </View>

          <View style={[styles.badge, medInfo.taken && styles.badgeGreen]}>
            <Text style={[styles.medItem]}>
              {medInfo.taken ? (
                <FontAwesome5 name={"check"} solid size={15} color={"green"} />
              ) : null}
              {medInfo.taken ? <Text style={{color: "#117B34FF"}}> Taken</Text> : <Text>Pending</Text>}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    borderRadius: 8,
    height: 170,
    width: 170,
    backgroundColor: "#F8F9FAFF",
    borderColor: "#BDC1CAFF",
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTaken: {
    backgroundColor: "#d2f8d2",
  },
  // if the user missed to take a med, apply this style
  redBorder: {
    borderColor: "red",
  },
  medItem: {
    color: "black",
    padding: 2,
    textAlign: "center",
  },
  medContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    width: 75,
    borderRadius: 20,
    margin: 15,
    paddingVertical: 5,
    backgroundColor: "#BDC1CAFF",
  },
  badgeGreen: {
    backgroundColor: "#EEFDF3FF",
    color: "#117B34FF",
  },
  badgeRed: {
    backgroundColor: "#FEF0F1FF",
    color: "#F22128FF",
  },
});

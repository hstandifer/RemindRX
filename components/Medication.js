import { Pressable, View, Text, StyleSheet, Button } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Medication({ medInfo }) {
  return (
    <View style={styles.medContainer}>
      <Pressable>
        <View style={[styles.itemContainer]}>
          <Text style={[styles.medItem, styles.title]}>{medInfo.name}</Text>
          <View style={styles.timeContainer}>
            <FontAwesome5 name={"clock"} solid size={15} color={"black"} />
            <Text style={styles.medItem}>{medInfo.time}</Text>
          </View>

          <View style={styles.badge}>
            <Text style={[styles.medItem]}>
              Pending
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

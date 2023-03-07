import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

export default function Homepage() {
  return (
    <View style={styles.HomepageContainer}>
      <Text style={styles.title}>Medications</Text>
      <View style={styles.sortContainer}>
        <Button title="sort" />
      </View>

      <ScrollView style={styles.listContainer}>
        <Text>MEDICINE BOX</Text>
      </ScrollView>

      <View style={styles.navContainer}>
        <Text style={{ color: 'black' }}>Navbar Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomepageContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 50,
  },
  sortContainer: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  listContainer: {
    // backgroundColor: 'limegreen',
    width: '100%',
    borderWidth: 2,
  },
  navContainer: {
    heigth: 100,
    padding: 50,
    width: '100%',
    // backgroundColor: 'blue',
    borderWidth: 2,
    marginVertical: 40,
  },
});
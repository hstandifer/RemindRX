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
import HomeScreen from "./screens/Homescreen";
import ManageScreen from "./screens/ManageScreen";
import AccountScreen from "./screens/AccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              size = focused ? 25 : 20;
              color = focused ? "blue" : "black";
            } else if (route.name === "Manage") {
              iconName = "medkit";
              size = focused ? 25 : 20;
              color = focused ? "blue" : "black";
            } else if (route.name === "Account") {
              iconName = "user-circle";
              size = focused ? 25 : 20;
              color = focused ? "blue" : "black";
            }
            return <FontAwesome5 name={iconName} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Manage" component={ManageScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

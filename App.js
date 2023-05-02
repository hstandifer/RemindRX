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
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AddMedicationsScreen from "./components/AddMedicationsScreen";

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        options={{ headerShown: false }}
        component={AccountScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              size = focused ? 25 : 20;
            } else if (route.name === "Manage") {
              iconName = "medkit";
              size = focused ? 25 : 20;
            } else if (route.name === "AccountScreen") {
              iconName = "user-circle";
              size = focused ? 25 : 20;
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={
          {
            //activeTintColor: "blue",
            //inactiveTintColor: "black",
            //activeBackgroundColor: "white",
          }
        }
        activeColor="white"
        barStyle={{ backgroundColor: "#99ccff" }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Manage" component={ManageScreen} />
        <Tab.Screen name="AccountScreen" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

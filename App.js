import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import RecipeDetailsScreen from './app/screens/recipeDetailsScreen'
import Icon from './app/components/Icons'

export default function App() {
  return (
    <RecipeDetailsScreen/>
   
  );
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import RecipeDetailsScreen from './app/screens/recipeDetailsScreen'

export default function App() {
  return (
    <RecipeDetailsScreen/>
  );
}

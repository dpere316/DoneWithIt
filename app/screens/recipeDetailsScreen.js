import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";

function recipeDetailsScreen(props) {
  return (
    <SafeAreaView>
      <AppText style={styles.title}>Mixed Berry Melody</AppText>
      <Image
        style={styles.image}
        source={require("../../assets/images/photo.png")}
      />
      <AppButton title="Log Meal" onPress={() => console.log("Log Meal")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default recipeDetailsScreen;

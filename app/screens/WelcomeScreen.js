import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/splash.png")}
    >
      {/* <Image/>  LOGO GOES HERE  */}
      <View styles={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Login")} />
        <AppButton title="Register" color="secondary" onPress={() => console.log("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer:{
      padding:20,
      
     
  }
});
export default WelcomeScreen;

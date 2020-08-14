import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

function WelcomeScreen(props) {

  return <ImageBackground 
  style ={styles.background}
  source={require("../assets/splash.png")}>
    {/* <Image/>  LOGO GOES HERE  */}
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
  </ImageBackground>;

}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end"
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65"
    },
    signUpButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"
    }
})
export default WelcomeScreen;

import React from "react";
import { Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import AppText from "../components/AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function recipeDetailsScreen(props) {
  return (
    <SafeAreaView>
    

     <MaterialCommunityIcons onPress = {() => console.log('add to faves')} style={styles.faveIcon} name ='heart' size={30} color ='red'/>
    
      <AppText style={styles.title}>Mixed Berry Melody</AppText>
      <Image
        style={styles.image}
        source={require("../../assets/images/photo.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  faveIcon:{
    position:'absolute',
    top:50,
    right:30
  },

  title: {
    textAlign: "center",
    paddingTop:40,
    paddingBottom: 10,
  },
});

export default recipeDetailsScreen;

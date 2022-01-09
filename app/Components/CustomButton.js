import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Color from "../Constetns/Color";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Color.forth,
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
      color: 'white',
      fontSize: 16,
  }
});

export default CustomButton;

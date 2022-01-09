import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import Color from '../Constetns/Color';

const CustomModal = (props) => {
  return (
    <View style={styles.modal}>
      <Modal animationType="slide" visible={props.Visible} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 30 }}>{props.title}</Text>
            {props.children}
            <View style={{ flexDirection: "row-reverse" }}>
              <View
                style={{ paddingTop: 40, width: 100, marginHorizontal: 10 }}
              >
                <Button
                  title="تایید"
                  onPress={props.confirm}
                  color={Color.primary}
                />
              </View>
              <View style={{ paddingTop: 40, width: 100 }}>
                <Button title="انصراف" onPress={props.decline} color="red" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomModal;

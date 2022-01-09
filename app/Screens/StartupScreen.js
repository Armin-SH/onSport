import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import routes from '../Navigator/routes';

import Color from "../Constetns/Color";
import * as authActions from "../Store/action/auth";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate(routes.AUTH);
        return;
      }
      const transformedData = JSON.parse(userData);
      const {
        token,
        userId,
        userName,
        userEmail,
        userAdress,
        userFirstName,
        userLastName,
        userPhoneNumber,
      } = transformedData;

      if (!token || !userId) {
        props.navigation.navigate(routes.AUTH);
        return;
      }

      props.navigation.navigate(routes.MAIN);
      dispatch(
        authActions.authenticate(
          userId,
          token,
          userAdress,
          userName,
          userFirstName,
          userLastName,
          userPhoneNumber,
          userEmail
        )
      );
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Color.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;

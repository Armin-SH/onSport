import React, { useReducer, useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from "react-native";
import Color from "../../Constetns/Color";
import Button from '../../Components/Button';
import Input from "../../Components/UI/Input";
import Card from "../../Components/Card";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from "react-redux";
import * as AuthAction from "../../Store/action/auth";
import { useSelector } from "react-redux";
import * as authActions from "../../Store/action/auth";
import device from "../../Config/device";
import routes from "../../Navigator/routes";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const ProfileScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.fetchUserBuy());
  }, [dispatch]);
  console.log("network")
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const userInfo = useSelector((state) => state.auth);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: userInfo.userFirstName,
      lastName: userInfo.userLastName,
      userPhoneNumber: userInfo.userPhoneNumber,
      userAdress: userInfo.userAdress,
    },
    inputValidities: {
      name: false,
      lastName: false,
      userPhoneNumber: false,
      userAdress: false,
    },
    formIsValid: false,
  });

  const authHandler = async () => {
    let action;
    action = authActions.updateUser(
      userInfo.token,
      userInfo.userId,
      userInfo.userName,
      userInfo.userEmail,
      userInfo.userAdress,
      formState.inputValues.name,
      formState.inputValues.lastName,
      formState.inputValues.userPhoneNumber,
      formState.inputValues.userAdress
    );
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      Alert.alert("ok", "ok");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={10}
      style={styles.screen}
    >
      <LinearGradient
      colors={[Color.primary, Color.second]}
      style={{ flex: 1, justifyContent: 'center' }}
        start={{ x: 2, y: 2 }}
        end={{ x: 1, y: 0 }}
      >
        <ScrollView style={{ flex: 1, }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.userInf}>
              <Text style={styles.mainText}>نام کاربری</Text>
              <Text style={styles.mainText}>{userInfo.userName}</Text>
            </View>
            <View style={styles.userInf}>
              <Text style={styles.mainText}>ایمیل</Text>
              <Text style={styles.mainText}>{userInfo.userEmail}</Text>
            </View>
            <View style={styles.Container}>
              <Input
                id="name"
                label="نام"
                keyboardType="default"
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={userInfo.userFirstName}
              />
              <Input
                id="lastName"
                label="نام خانوادگی"
                keyboardType="default"
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={userInfo.userLastName}
              />
              <Input
                id="userPhoneNumber"
                label="شماره تلفن"
                keyboardType="default"
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={userInfo.userPhoneNumber}
              />
              <Input
                id="userAdress"
                label="آدرس"
                keyboardType="default"
                autoCapitalize="none"
                onInputChange={inputChangeHandler}
                initialValue={userInfo.userAdress}
              />
              <View style={{ marginTop: 20 }}>
                <Button width={75} height={40} title="تایید" onPress={authHandler} style={{ height: 40, width: 150 }} />
              </View>
            </View>
            <View style={{ marginTop: 50, flexDirection: "row" }}>
              <View style={{ width: device.width * 0.4 }}>
                <Button
                width = {150}
                height={40}
                  title="اجناس خریداری شده"
                  style={{ height: 40, width: 150 }}
                  onPress={() => {
                    dispatch(authActions.fetchUserBuy());
                    navigation.navigate(routes.PURCHASED_PRODUCT);
                  }}
                />
              </View>
              <View style={{ width: device.width * 0.4 }}>
                <Button
                width = {150}
                height ={40}
                  title="خروج از حساب کاربری"
                  style={{ height: 40, width: 150 }}
                  onPress={() => {
                    dispatch(AuthAction.logout());
                    navigation.navigate(routes.AUTH);
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 50,
    borderRadius: 50,
    fontFamily: "Shabnam-Light",
  },
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  screen: {
    flex: 1,
  },
  Container: {
    width: "90%",
    maxWidth: 400,
    maxHeight: 600,
    padding: 20,
    alignItems: "center",
  },
  userInf: {
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    flexDirection: "row-reverse",
    paddingHorizontal: 10,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  adress: {
    height: 40,
    marginBottom: 10,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  infAdress: {
    height: 70,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  mainText: {
    color: 'white',
    fontFamily: 'Shabnam',
    fontSize: 18
  }
});

export default ProfileScreen;

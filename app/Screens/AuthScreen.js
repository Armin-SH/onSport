import React, { useReducer, useEffect, useCallback, useState } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
  Text,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from "react-redux";
import Input from "../Components/UI/Input";
import Card from "../Components/Card";
import Color from "../Constetns/Color";
import * as authActions from "../Store/action/auth";
import Device from '../Config/device';
import Button from '../Components/Button';
import routes from '../Navigator/routes'
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

const AuthScreen = ({navigation}) => {
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.auth);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert("خطایی رخ داده!", error, [{ text: "باشه" }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password,
        formState.inputValues.username,
        formState.inputValues.adress
      );
    } else {
      action = authActions.login(
        formState.inputValues.username,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
      if (isSignup) {
        Alert.alert("موفقیت آمیز", "ثبت نام شما با موفقیت انجام شد");
        setIsSignup(false);
      } else {
        navigation.navigate(routes.MAIN);
      }
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

  const GuideModal = () => {
    return (
      <View style={styles.modal}>
        <Modal animationType="slide" visible={visibilty} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text>this is the guid line</Text>
              <Button
                title="متوجه شدم"
                onPress={() => {
                  setVisibilty(!visibilty);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <LinearGradient
      colors={[Color.primary, Color.second]}
      style={styles.gradient}
        start={{ x: 2, y: 2 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.authContainer}>
          <ScrollView>
            {isSignup ? (
              <Input
                id="email"
                label="ایمیل"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="لطفا آدرس ایمیل را صحیح وارد کنید"
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            ) : null}
            <Input
              id="username"
              label="نام کاربری"
              keyboardType="default"
              required
              autoCapitalize="none"
              errorText="لطفا نام کاربری را صحیح وارد کنید"
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="رمز عبور"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="لطفا رمز عبور را صحیح وارد کنید"
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            {isSignup ? (
              <Input
                id="adress"
                label="آدرس"
                keyboardType="default"
                required
                autoCapitalize="none"
                errorText="لطفا آدرس را صحیح وارد کنید"
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            ) : null}
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Color.primary} />
              ) : (
                  <Button
                  height={40}
                    style={{ height: 50 }}
                    title={isSignup ? "ثبت نام" : "ورود"}
                    color={Color.primary}
                    onPress={authHandler}
                  />
                )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
              height={40}
                style={{ height: 50 }}
                title={`${isSignup ? "ورود" : "ثبت نام"}`}
                onPress={() => {
                  setIsSignup((prevState) => !prevState);
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.modal}>
          <Modal animationType="slide" visible={visibilty} transparent={true}>
          <LinearGradient
      colors={[Color.primary, Color.second]}
      style={styles.gradient}
        start={{ x: 2, y: 2 }}
        end={{ x: 1, y: 0 }}
      >
            <View style={styles.modal}>
              <View style={styles.modalView}>
                <Text style={styles.guide}>ثبت نام در اپلیکیشن</Text>
                <Text style={styles.guideText}>اولین گام برای خرید کالا از مجموعه ما، ثبت نام در اپلیکیشن است. برای این کار بر روی گزینه‌ی "ثبت نام"  کلیک کنید تا وارد محیط ثبت نام شوید.</Text>
                <Text style={styles.guideText}>تکمیل فرم و ثبت‌ نام در اپلیکیشن آنلاین اسپورت بسیار ساده است و به سرعت انجام می‌گیرد. دقت کنید که تمامی اطلاعات خواسته شده در فرم ثبت نام را  به صورت صحیح و کامل وارد کنید.</Text>
                <Text style={styles.guideText}>پس از عضویت در اپلیکیشن، هر زمان که بخواهید، می‌توانید با ورود به حساب کاربری خود، نسبت به خرید محصولات مورد نظرتان اقدام نمایید.</Text>
                <Button
                width={120}
                height={40}
                  title="متوجه شدم"
                  onPress={() => {
                    setVisibilty(!visibilty);
                  }}
                />
              </View>
            </View>
            </LinearGradient>
          </Modal>
        </View>
        <View style={{ marginTop: 100, width: 100 }}>
          <Button
          width={120}
          height={40}
            style={{ height: 40 }}
            title="راهنمایی"
            onPress={() => {
              setVisibilty(!visibilty);
            }}
          />
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: Device.width * 0.85,
    maxWidth: 400,
    maxHeight: 600,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  guide: {
    fontFamily: "Shabnam-Bold",
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'center',
    color: 'black'
  },
  guideText: {
    fontFamily: 'Shabnam-Light',
    fontSize: 15,
    marginVertical: 8,
    textAlign: 'right',
    alignSelf: 'flex-end',
    color: 'black'
  },
});

export default AuthScreen;

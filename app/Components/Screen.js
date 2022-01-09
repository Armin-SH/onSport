import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import Header from '../Navigator/components/Header';

import device from '../Config/device';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Constetns/Color';

// TODO: change View to ScrollView

export default Screen = ({
  children,
  style,
  headerShown,
  headerTitle,
  onPress,
  addCart,
}) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        style={styles.gradient}
        colors={[Color.primary, Color.second]}
        start={{ x: 2, y: 2 }}
        end={{ x: 1, y: 0 }}
      >
        <Header title={headerTitle} visible={headerShown} onPress={onPress} addCart={addCart} />
          <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            style={[styles.container, style]}>
            <KeyboardAvoidingView behavior="height">
              {children}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    height: device.height / 0.8,
    width: device.width,
    //marginTop: 80
  },
});

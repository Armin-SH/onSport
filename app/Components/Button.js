//New gradient button
import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import color from '../Constetns/Color';

const gradient = ({onPress,height, width, title, style, textStyle, ...otherProps}) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      style={[styles.button, style]}
      {...otherProps}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: height,
          borderColor: color.primary,
          width: width,
        }}>
        {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  button: {},
  text: {
    color: 'white',
    fontFamily: 'Shabnam-Bold',
  },
});

export default gradient;

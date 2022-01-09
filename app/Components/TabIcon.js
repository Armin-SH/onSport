import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';



import * as Svgs from '../assets/icons/Svgs';


export default TabIcon = ({
  icon,
  style,
  color,
  ...otherProps
}) => {

  let Touchable = TouchableNativeFeedback;
  if (Platform.OS != 'android') {
    Touchable = TouchableOpacity;
  }

  const handleIcon = (iconName) => {
    return (Svgs[iconName]);
  };

  return (

    <Touchable
      onPress={() => { }}
      {...otherProps}>
      <SvgXml xml={handleIcon(icon)} color={color} style={styles.icon} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  icon: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  profile: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
});

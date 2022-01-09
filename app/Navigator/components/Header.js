import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

//import Text from '../../Components/Text';
import Svg from '../../Components/Svg';
import * as Svgs from '../../assets/icons/Svgs';

import device from '../../Config/device';
import BackButton from './BackButton';
import Color from '../../Constetns/Color'
export default Header = ({ title, visible = true, onPress, addCart }) => {
  if (!visible) return <></>;

  return (
    <View style={styles.container}>
      <BackButton />
        <Text style={styles.title}>{title}</Text>
        {addCart ? <Svg onPress={onPress} xml={Svgs.ADD_CART} /> : null}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.second,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    width: device.width,
    alignItems: 'center',
    paddingTop: 10,
    top: 0,
    zIndex: 1,
  },
  title: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'Shabnam-Bold'
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Card from './Card';

import device from '../Config/device';
import Button from './Button';
const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        {props.children}
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>تومان {props.price}</Text>
        <Button width={device.width *0.7} height={40} title={"مشاهده"} onPress={props.onSelect} style={{ marginVertical: 10, height: 40, width: 150 }} />
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: 350,
    margin: 20,
    width: device.width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  imageContainer: {
    width: device.width,
    height: '60%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  details: {
    alignItems: 'center',
    height: '40%',
    paddingVertical: 10
   },
  title: {
    fontSize: 20,
    marginVertical: 2,
    fontFamily: 'Shabnam-Bold',
    color: 'white'
  },
  price: {
    fontSize: 16,
    color: '#ccc',
    fontFamily: 'Shabnam-Light',
    marginVertical: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  },
  seperator: {
    height: 0.5,
    width: device.width * 0.9,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 10
  },
});

export default ProductItem;

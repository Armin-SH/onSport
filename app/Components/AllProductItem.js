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

const AllProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onSelect} useForeground>
      <View style={styles.product}>
        <View style={styles.touchable}>
          <View style={{ flexDirection: "row-reverse", justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.imageContainer}>
              <Image resizeMode="contain" style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>تومان {props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 180,
    margin: 20,
    width: '90%',
    //borderWidth: 1,
    borderRadius: 50,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: 'white'
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  details: {
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: 'Shabnam-Bold',
    color: 'white'
  },
  price: {
    fontSize: 16,
    color: '#ccc',
    fontFamily: 'Shabnam-Light'
  },
});

export default AllProductItem;

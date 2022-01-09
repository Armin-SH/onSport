import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Svg from '../Components/Svg';
import * as Svgs from '../assets/icons/Svgs';
import Icon from 'react-native-vector-icons/FontAwesome';
import device from '../Config/device';

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>x{props.quantity}  </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>تومان {props.amount}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Svg xml={Svgs.DELETE}          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginVertical: 10,
    height: 100,
    borderRadius: 50,
    width: device.width * 0.9
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'Shabnam-Bold',
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'Shabnam-Light',
    color: 'white'
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;

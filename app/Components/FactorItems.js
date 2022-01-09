import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Card from '../Components/Card';
import Device from '../Config/device';

const factorItems = props => {
  return (
    <Card style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>x{props.quantity}  </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>تومان {props.amount}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 100,
    width:Device.width * 0.95,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'Shabnam-Light'
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'Shabnam-Light'
  },
});

export default factorItems;

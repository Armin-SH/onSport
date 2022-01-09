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

const Bought = props => {

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
          <View style={{flexDirection:"row-reverse",justifyContent:'space-around',alignItems:'center'}}>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>تومان {props.price}</Text>
            </View>
          </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin:20,
    width:'90%'
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
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginVertical:10
  },
  price: {
    fontSize: 16,
    color: '#888'
  },
});

export default Bought;

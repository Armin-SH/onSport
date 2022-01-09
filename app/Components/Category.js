import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import device from '../Config/device';
import Svg from '../Components/Svg';
import * as Svgs from '../assets/icons/Svgs';

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View
      style={[
        (props.title === 'لباس مردانه' || props.Men)
          ? {
              flexDirection: 'row',
              width: device.width * 1,
              justifyContent: 'space-around',
            }
          : {
              flexDirection: 'row-reverse',
              width: device.width * 1,
              justifyContent: 'space-around',
            },
      ]}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: device.width * 0.3}}>
        <Text style={{color: 'white',fontSize: 40, fontFamily: "Shabnam-Bold", marginVertical: 10}}>{props.title}</Text>
      </View>
      <View style={styles.gridItem}>
        <ImageBackground
        resizeMode="cover"
          style={styles.ImageContainer}
          source={{uri: props.Source}}>
          <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
            <View style={{...styles.container}}>
            </View>
          </TouchableCmp>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    //flex: 1,
    marginVertical: 20,
    height: 300,
    marginHorizontal: 15,
    alignSelf: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 12,
    width: device.width * 0.55,
    flexDirection: 'row',
  },
  gridItemReverce: {
    //flex: 1,
    marginVertical: 40,
    height: 250,
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    width: device.width * 0.7,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'white',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    justifyContent: 'flex-end',
    width: 500,
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    textAlign: 'center',
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CategoryGridTile;

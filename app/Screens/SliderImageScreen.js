import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import Colors from "../Constetns/Color";
import Button from '../Components/Button';
import device from '../Config/device';
import LinearGradient from 'react-native-linear-gradient';

const SliderImageScreen = ({navigation, route}) => {
  const {productImage} = route.params;
  return (
    <View style={styles.hole}>
      <LinearGradient
        style={{flex: 1}}
        colors={[Colors.primary, Colors.second]}
        start={{ x: 2, y: 2 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.screen}>
          <Image
            resizeMode="contain"
            source={{ uri: productImage}}
            style={{ width: "100%", height: "90%", borderRadius: 50 }}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginBottom: 50, alignItems: 'center',justifyContent: 'center', paddingBottom: 20 }}>
          <Button
          width={device.width *0.5}
          height={40}
            title="بازگشت"
            onPress={() => {
              navigation.pop();
            }}
            style={{ height: 60, width: device.width * 0.7 }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  hole: {
    flex: 1,
    justifyContent: "flex-end",
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20
  },
});

export default SliderImageScreen;

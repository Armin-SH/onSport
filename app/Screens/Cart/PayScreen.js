import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import routes from '../../Navigator/routes';
import TouchableCmp from '../../Components/Touchable';
import device from '../../Config/device';
import Color from '../../Constetns/Color';

const payScreen = (props) => {
  const webviewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  /*if (currentUrl.includes("Status=NOK")) {
    props.navigation.navigate(routes.FACTOR);
  }*/

  /*const quiteHandler = () => {
    props.navigation.navigate("cart");
  };*/
  const factorHandler = () => {
    props.navigation.navigate(routes.FACTOR);
  }
  const exitHandler = () => {
    props.navigation.pop(1);
  }
  return (
    <View style={styles.flexContainer}>
      <WebView
        source={{uri: 'https://zarinp.al/351261'}}
        ref={webviewRef}
        onNavigationStateChange={(navState) => {
          setCurrentUrl(navState.url);
        }}
      />
      {currentUrl.includes('Status=OK') ? (
        <TouchableCmp onPress={factorHandler}>
          <View
            style={{
              width: device.width,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: Color.primary,
            }}>
            <Text
              style={{
                fontFamily: 'Shabnam-Bold',
                fontSize: 18,
                color: 'white',
              }}>
              دریافت فاکتور
            </Text>
          </View>
        </TouchableCmp>
      ) : null}
      {currentUrl.includes('Status=NOK') ? (
        <TouchableCmp onPress={exitHandler}>
          <View
            style={{
              width: device.width,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: Color.primary,
            }}>
            <Text
              style={{
                fontFamily: 'Shabnam-Bold',
                fontSize: 18,
                color: 'white',
              }}>
              خروج
            </Text>
          </View>
        </TouchableCmp>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Shabnam-Light',
  },
});

export default payScreen;
